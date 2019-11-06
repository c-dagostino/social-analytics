import CloudWatchLoggingService from './services/cloudwatch';
import ConsoleLoggingService from './services/console';

class Logger {
  constructor(config) {
    this.logName = `/${process.env.REACT_APP_CLOUDWATCH_LOGNAME}/${process.env.REACT_APP_ENVIRONMENT}`;
    this.logEvents = [];
    this.service = null;
  }

  async init() {
    if (!this.service) {
      if (process.env.REACT_APP_CLOUDWATCH_LOGNAME) {
        this.service = new ConsoleLoggingService();
      } else {
        this.service = new CloudWatchLoggingService({
          logName: this.logName,
        });
      }
    }
  }

  async log(message) {
    await this.init();
    this.service.log(message);
  }

  async batchLogMessage(message) {
    this.logEvents.push(message);
  }

  async flush() {
    await this.init();
    this.service.flush([...this.logEvents]);
    this.logEvents = [];
  }
}

export default Logger;
