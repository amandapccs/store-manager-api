require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

//---> Singleton Pattern:
// class DbSingleton {
//   constructor() {
//   this.db = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE || 'StoreManager',
//   });

//     if (!DbSingleton.instance) {
//       DbSingleton.instance = this;
//     }
//     return DbSingleton.instance;
//   }

//   dbRun() {
//     return this.db;
//   }
// }

// const database = new DbSingleton();
// const db = database.dbRun();
  
module.exports = { db };