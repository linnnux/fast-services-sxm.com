const fs = require("fs");
const path = require("path");
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const LOCAL_URL = process.env.LOCAL_URL;
//const databaseUrl = process.env.DATABASE_URL;
//const secretKey = process.env.SECRET_KEY;



//launch server
exports.runServer = function()
{

  const { spawn } = require('child_process');

  const server = spawn('node', ['server']);

  server.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  server.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  server.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });


};

exports.openLocalHostUrl = function()
{

  const open = require('open');

  const url = 'http://localhost:'+process.env.PORT;

  open(url);
  console.log('Server listening on port' + process.env.PORT);
}
