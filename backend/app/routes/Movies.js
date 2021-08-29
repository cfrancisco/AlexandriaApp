const pino = require("pino");

const logger = pino({
  prettyPrint: {
    colorize: true,
    ignore: "pid,hostname",
  },
  level: "debug",
});

const util = require("util");

const { graphqlHTTP } = require("express-graphql");

const rootSchema = require("../graphql/Schema");

const { queryDataUsingGraphql } = require("../Queries");

/**
 * Creates the middleware to handle routes
 *
 * @param {Promise<{result: object, totalItems: number}| error>>} QueryDataUsingGraphql
 *                               A promise that returns result in graphQL format
 */

/**
 * This endpoint returns data fetched using graphql schema
 */
const graphqlRoute = {
  mountPoint: "/movies/graphql",
  middleware: graphqlHTTP({
    schema: rootSchema,
    graphiql: true,
    rootValue: {
      async getMovies(root) {
        logger.debug(`graphql-route.get: graphql query=${util.inspect(root)}`);
        const {
          filter: { id, title, plot, page, isSpecific },
        } = root;

        try {
          const res = await queryDataUsingGraphql(
            title,
            id,
            isSpecific,
            page,
            plot
          );
          return res;
        } catch (e) {
          logger.error("graphql-route.get:", e.message);
          const er = new Error(e);
          er.message = `graphql-route.get: ${e.message}`;
          throw er;
        }
      },
    },
  }),
};

module.exports = { graphqlRoute };
