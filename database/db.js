const mysql = require('mysql2');

const db = mysql.createConnection({ 
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'rFtbKLajkbEoOieiQdNvebNSNcXcjbyd', 
  database: 'railway'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    throw err; 
  }
  console.log('✅ MySQL Connected');
});

module.exports = db;
