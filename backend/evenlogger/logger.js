const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", message);
  }
}

const logger = new Logger();
const logfile = ".evenlogger/eventlog.txt";

const logtofile = (message) => {
  const logmessage = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync(logfile, logmessage);
};

logger.on("message", logtofile);

setInterval(() => {
  const memoryUsage = ((os.totalmem() - os.freemem()) / os.totalmem()) * 100;

  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}%`);
}, 3000);

logger.log("Application started");
logger.log("Application event occurred");

