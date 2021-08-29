const { fetchData } = require("./http");

class Movies {
  static getMovies(attrs) {
    const formattedAttrs = attrs.reduce(
      (acc, { attr, value }) => acc.concat(`&${attr}=${value}`),
      ""
    );

    return fetchData(formattedAttrs);
  }
}

module.exports = { Movies };
