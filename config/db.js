import Sequelize from "sequelize";
dotenv.config()

import dotenv from 'dotenv';

// const db = new Sequelize( process.env.DB_URL, {
const db = new Sequelize(  
  // process.env.DB_URL, 
process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSAWORD,
{
// process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSAWORD, 

// host: process.env.DB_HOST,
// host: '127.0.0.1',
host: process.env.DB_HOST,

  port: '3306',
  dialect: 'mysql',
  logging: false, // 👈 Desactiva los logs SQL en consola
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export default db;
