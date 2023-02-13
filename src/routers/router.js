// Importation de la bibliothèque http
    const http = require('http');
    const ejs = require('ejs');
    const fs = require('fs');

    // Définition du router
    const router = (req, res) => {

      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

      if (req.url === '/public/css/main.css' || req.url === '/css/main.css')
      {
       fs.readFile('public/css/main.css', 'utf-8', (err, data) => {
         if (err)
         {
           res.writeHead(500, {'Content-Type': 'text/plain'});
           res.end(err);
         }
         else
         {
           res.writeHead(200, {'Content-Type': 'text/css'});
           res.end(data);
         }
       });
     }
      else if (req.url === '/' || req.url === '/home')
      {
        res.writeHead(200, {'Content-Type': 'text/html'});

        const html = fs.readFileSync('./views/home/indexView.ejs', 'utf-8');
        const data = { title: 'wellcome to home page' };

        const output = ejs.render(html, data);
        console.log(output);
        res.end(ejs.render(html, data));
      }
      else if (req.url === '/about')
      {
        res.write('A propos');
        res.end();
      }
      else
      {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('Not found ');
        res.end('ERROR 404');
      }
    };

    module.exports = router;
