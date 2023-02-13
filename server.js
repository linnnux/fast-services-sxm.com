var http = require('http');
      const dotenv = require('dotenv');
      let router = require('./src/routers/router');
      let srv = require('./srv');

      const server = http.createServer(router);

      server.listen(process.env.PORT,  () => { console.log('Server listening on port' + process.env.PORT);},  () => { srv.openLocalHostUrl();});
