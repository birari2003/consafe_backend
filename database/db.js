const mysql = require('mysql2');

const db = mysql.createConnection({ 
  host: 'sql305.byethost18.com',
  user: '	b18_22538669',
  password: 'yuvraj7600', 
  database: 'b18_22538669_milk_mate'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    throw err; 
  }
  console.log('✅ MySQL Connected');
});

module.exports = db;
