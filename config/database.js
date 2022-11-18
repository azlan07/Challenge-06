/**
 * @file Manages database connection configuration.
 * @author kelompok5
 */

/** Destruct environment variable to get database configuration */
// const { DB_USERNAME = 'postgres', DB_PASSWORD = 'azlan', DB_HOST = '127.0.0.1', DB_NAME = 'chapter6' } = process.env;

// module.exports = {
//   development: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}`,
//     host: DB_HOST,
//     dialect: 'postgres',
//   },
//   test: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}`,
//     host: DB_HOST,
//     dialect: 'postgres',
//   },
//   production: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}`,
//     host: DB_HOST,
//     dialect: 'postgres',
//   },
// };


//coba

const { Sequelize } = require("sequelize");

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "zMYiZo2562bev7TPFSUy",
  DB_HOST = "containers-us-west-32.railway.app",
  DB_NAME = "railway",
  DB_PORT = "5856",
  DB_URI = "postgresql://postgres:zMYiZo2562bev7TPFSUy@containers-us-west-32.railway.app:5856/railway"
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