import { Auth } from 'aws-amplify';
import uuid from 'uuid/v4';
import * as Sentry from '@sentry/browser';
import AWS from 'aws-sdk';

class CloudWatchLoggingService {
  constructor(config) {
    const { logName } = config;
    this.logGroup = logName;
    this.logStream = null;
    this.service = null;
  }

  async init() {
    if (!this.service) {
      const credentials = await Auth.currentCredentials();
      const { accessKeyId, secretAccessKey, sessionToken } = credentials;
      this.service = new AWS.CloudWatchLogs({
        accessKeyId,
        secretAccessKey,
        sessionToken,
        region: process.env.REACT_APP_AWS_REGION,
      });

      this.logStream = uuid();
      const logStreamParams = {
        logGroupName: this.logGroup,
        logStreamName: this.logStream,
      };
      try {
        await this.service.createLogStream(logStreamParams).promise();
      } catch (err) {
        // The log stream already exists, fetch the sequence token to use with the next request
        if (err.code === 'ResourceAlreadyExistsException') {
          this.sequenceToken = await this.fetchSequenceToken();
        } else {
          Sentry.captureException(err);
        }
      }
    }
  }

  async fetchSequenceToken() {
    const params = {
      logGroupName: this.logGroup,
      logStreamNamePrefix: this.logStream,
    };
    try {
      const { logStreams } = await this.service
        .describeLogStreams(params)
        .promise();
      const logStream = logStreams.find(
        stream => stream.logStreamName === this.logStream,
      );
      return logStream.uploadSequenceToken;
    } catch (err) {
      Sentry.captureException(err);
    }
    return null;
  }

  async log(message) {
    await this.init();
    const logEvents = [
      {
        message,
        timestamp: Date.now(),
      },
    ];
    const logEventParams = {
      logGroupName: this.logGroup,
      logStreamName: this.logStream,
      sequenceToken: this.sequenceToken,
      logEvents,
    };
    try {
      const response = await this.service
        .putLogEvents(logEventParams)
        .promise();
      const { nextSequenceToken } = response;
      this.sequenceToken = nextSequenceToken;
    } catch (err) {
      Sentry.captureException(err);
    }
  }

  async flush(batch) {
    await this.init();
    const logEvents = batch.map(message => ({
      message,
      timestamp: Date.now(),
    }));
    const logEventParams = {
      logGroupName: this.logGroup,
      logStreamName: this.logStream,
      sequenceToken: this.sequenceToken,
      logEvents,
    };

    try {
      const response = await this.service
        .putLogEvents(logEventParams)
        .promise();
      const { nextSequenceToken } = response;
      this.sequenceToken = nextSequenceToken;
    } catch (err) {
      Sentry.captureException(err);
    }
  }
}

export default CloudWatchLoggingService;
