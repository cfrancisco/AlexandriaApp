const pino = require("pino");

const axios = require("axios");

const API_KEY = "8c4adbd7";

const logger = pino({
  prettyPrint: {
    colorize: true,
    ignore: "pid,hostname",
  },
  level: "debug",
});

const fetchData = (strAttr) => {
  try {
    const host = "http://www.omdbapi.com";
    return axios.get(`${host}/?apikey=${API_KEY}${strAttr}`);
  } catch (error) {
    logger.error(error.message);
    return Promise.reject(error.message);
  }
};

class Movies {
  static getMovies(attrs) {
    logger.info("Fetching movies");

    const formattedAttrs = attrs.reduce(
      (acc, { attr, value }) => acc.concat(`&${attr}=${value}`),
      ""
    );

    return fetchData(formattedAttrs);
  }
}

module.exports = { Movies };
