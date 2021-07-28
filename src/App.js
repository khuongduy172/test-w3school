import React from 'react';
// import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

// const oracledb = require('oracledb');
// // oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// const mypw = 'Khuongduy17220011'  // set mypw to the hr schema password
// try {
//   oracledb.initOracleClient({libDir: 'F:\\installdir\\common\\lib\\instantclient_19_10'});
// } catch (err) {
//   console.error('Whoops!');
//   console.error(err);
//   process.exit(1);
// }
// async function run() {
//   try {
//     var connection = await oracledb.getConnection({
//       user          : "hr",
//       password      : mypw,
//       connectString : "localhost/XEPDB1"
//     });

//     var result = await connection.execute(`SELECT username FROM taikhoan`);
//     console.log("Result is:", result);

//   } catch (err) {
//     console.error(err.message);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();   // Always close connections
//       } catch (err) {
//         console.error(err.message);
//       }
//     }
//   }
// }

// run();


export default function  App(){
  //const {color}=props.colorBox;
  return (
  <div className='App'>
    <TextField
    label="Tên đăng nhập"
    />
  </div>
  );
}
  
