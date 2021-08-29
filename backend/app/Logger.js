const pino = require("pino");

const config = require("../config.json");
/*
   Instatiating Logger
*/
const logger = pino({
  prettyPrint: {
    colorize: true,
    ignore: "pid,hostname",
  },
  level: config.LOGGER_LEVEL,
});

module.exports = { logger };
