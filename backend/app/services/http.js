const axios = require("axios");

const { logger } = require("../Logger");

const config = require("../../config.json");

/*
Axios wrapper to fetch data from API
*/
const fetchData = (strAttr) => {
  logger.info(`Fetching data using ${strAttr}`);

  try {
    return axios.get(`${config.OMDB_HOST}/?apikey=${config.API_KEY}${strAttr}`);
  } catch (error) {
    logger.error(error.message);
    return Promise.reject(error.message);
  }
};


module.exports = { fetchData };
