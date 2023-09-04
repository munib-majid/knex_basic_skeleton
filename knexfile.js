const config = require("config");
module.exports = {
  development: {
    client: config.database.client,
    connection: {
      database: config.database.connection.database,
      user: config.database.connection.user,
      password: config.database.connection.password,
    },
    pool: {
      min: config.database.pool.min,
      max: config.database.pool.max,
    },
    migrations: {
      tableName: config.database.migrations.tableName,
    },
  },
};
