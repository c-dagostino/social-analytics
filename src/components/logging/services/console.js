/* eslint-disable */
class ConsoleLoggingService {
  log(message) {
    console.log(message);
  }

  flush(batch) {
    batch.forEach(message => console.log(message));
  }
}

export default ConsoleLoggingService;
