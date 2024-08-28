// lib/db.js

const mysql = require('mysql');
const db = mysql.createConnection({
  host : '15.164.245.19',
  user : 'user1',
  password : 'ycdc2024',
  database : 'project',
})

// MySQL 서버에 연결
db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류: ', err.stack);
    return;
  }

  console.log('MySQL에 연결되었습니다. 연결 ID: ' + db.threadId);
});

// 쿼리 예제
// db.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
//   if (error) throw error;
//   console.log('쿼리 결과: ', results[0].solution);
// });

// // 연결 종료
// db.end();

module.exports = db;