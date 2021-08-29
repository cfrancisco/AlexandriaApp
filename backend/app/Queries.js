const pino = require("pino");

const util = require("util");

const { Movies } = require("./services/omdb");

const logger = pino({
  prettyPrint: {
    colorize: true,
    ignore: "pid,hostname",
  },
  level: "debug",
});

/**
 * Fetch data after using a GraphQL query following the params below
 *
 * @param {String} title Movie's Title
 * @param {String} id Movie's Unique ID
 * @param {Boolean} isSpecific is for a detaits page
 * @param {Number} page initial page number
 * @param {String} plot short or long plot
 *
 * @returns {Promise.<{result: [{data...}| error>}
 *           A promise that returns a list of Movies
 */
const queryDataUsingGraphql = async (title, id, isSpecific, page, plot) => {
  try {
    logger.debug("queryUsingGraphql: Handling query created using Graphql.");

    const params = [];
    if (title) {
      params.push({ attr: isSpecific ? "t" : "s", value: title });
    }
    if (id) {
      params.push({ attr: "i", value: id });
    }
    if (page) {
      params.push({ attr: "page", value: page });
    }
    if (plot) {
      params.push({ attr: "plot", value: plot });
    }

    params.push({ attr: "type", value: "movie" });

    logger.debug(`queryUsingGraphql: params=${util.inspect(params)}`);

    const res = await Movies.getMovies(params);
    let result = null;
    if (isSpecific) {
      result = { movies: [res.data] };
    } else {
      result = { movies: res.data.Search };
    }
    logger.debug("queryUsingGraphql: Data received successfully.");
    return Promise.resolve(result);
  } catch (e) {
    logger.error("queryUsingGraphql:", e);
    const er = new Error(e);
    er.message = `queryUsingGraphql: ${e.message}`;
    throw er;
  }
};

module.exports = { queryDataUsingGraphql };
