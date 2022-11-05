// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: { /// seen by our development team 
    client: 'pg',
    connection: {
      database: 'twitterPractice', 
      user:     'postgres',
      password: ''
    }
  },

  production: { // seen by the world
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
