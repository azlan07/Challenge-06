/**
 * @file Manages database connection configuration.
 * @author kelompok5
 */

/** Destruct environment variable to get database configuration */
const { DB_USERNAME = "postgres",
  DB_PASSWORD = "rAi8nENAf0do3cwOZVy6",
  DB_HOST = "containers-us-west-21.railway.app",
  DB_NAME = "railway",
  DB_PORT = "6991",
  DB_URI = "postgresql://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{ PGPORT }}/${{ PGDATABASE }}"
} = process.env;

const db = new Sequelize(DB_URI,{
  define:{
    timestamps:false
  }
})

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    port : DB_PORT
    
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    port : DB_PORT

  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    port : DB_PORT

  },
  db
};