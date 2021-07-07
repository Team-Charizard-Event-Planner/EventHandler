const { Pool } = require('pg');
const myURI = 'postgres://vkdwvgkr:ONAuGYK17XUBWyruTzfgHvIbFhFDVj7d@kashin.db.elephantsql.com/vkdwvgkr';
const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};