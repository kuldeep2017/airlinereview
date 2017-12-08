const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://admin:admin@ds133496.mlab.com:33496/airlinereview'; // Databse URI and database name
  process.env.databaseName = 'production database: airlinereview'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://admin:admin@ds133496.mlab.com:33496/airlinereview'; // Databse URI and database name
  process.env.databaseName = 'development database: airlinereview'; // Database name
}
