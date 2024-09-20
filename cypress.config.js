const { defineConfig } = require("cypress");


const { verifyDownloadTasks } = require('cy-verify-downloads'); //file download option

// // ---------- exceldata ---------------
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');

// //------------mysql----------
// const mysql = require("mysql12")
// const connections = {
//   stagingA : {
//     host: "127.0.0.1",
//     user: "root",
//     password: "root",
//     database: "db1",
//   }
// }

function queryDB(connectionInfo, query) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(connectionInfo);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }

      connection.end();
      return resolve(results);

    })
  })
}
//--------------mysql-------------------------
//-------------------------------------------

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //// for cypress-mochawesome-reporter
  projectId: 'k2guqc',
  video: true, // to get video of whole running process
  chromeWebSecurity :false, //for multitab and multi-window

  //downloadsFolder:'cypress/e2e/6-downloadFile/downloadedFile',

  env:{
    "TAGS" : "@focus"
  },

  e2e: {
    baseUrl : 'https://gorest.co.in/',
    // baseUrl:'https://gorest.co.in/',
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);  // for cypress-mochawesome-reporter
      on('task', verifyDownloadTasks); //file download option

      // implement node event listeners here
      // //------------------mysql-------------------------
      // on("task", {
      //   // destructure the argument into the individual fields
      //   queryDatabase({ dbName, query }) {
      //     const connectionInfo = connections[dbName]

      //     if (!connectionInfo) {
      //       throw new Error(`Do not have DB connection under name ${dbName}`)
      //     }

      //     return queryDB(connectionInfo, query)
      //   }

      // });
      // //-----------------mysql---------------------------------

      // //------------------exeldata--------------

      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      })
      //---------------exeldata--------------

      // -----------------Task 1 -----------------------
      // task1 (file Cytask.cy,js)
      // on('task',taskname(){funcn def})
      
      // implement node event listeners here


      on('task',{
        print(){
          console.log('I am learning Cypress')
          return null
        }
      })

      // -----------------Task 2----------------------
      on('task',{
        myLog(msg){
          console.log(msg)
          return null
        }
      })

      // --------------Task 3--------------------
      on('task',{
        addition({a,b}){
          console.log(a+b)
          return a+b
        }
      })

      
    },
  },
});
