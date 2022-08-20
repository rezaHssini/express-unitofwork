const pgp = require("pg-promise")(/* options */);
const db = pgp("DATA_BASE_CONNECTION_STRING");

export function getDbConnection(): any {
  return db;
}
