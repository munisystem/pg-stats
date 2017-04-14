'use strict';

const pg = require('pg-promise')();

module.exports = (cn, queries) => {
  const client = pg(cn);

  let promises = [];
  Object.keys(queries).forEach(key => {
    promises.push(
      client.query(queries[key]).then(data => {
        let hash = {};
        hash[key] = data;
        return hash;
      }).catch(error => {
        pg.end();
        throw error;
      })
    );
  });

  return Promise.all(promises).then(results => {
    pg.end();
    return results;
  }).catch(error => {
    throw error;
  });
}
