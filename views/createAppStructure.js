const fs = require("fs");
const path = require("path");
const dotenv = require('dotenv');
var srv = require('./srv');

dotenv.config();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const LOCAL_URL = process.env.LOCAL_URL;
//const databaseUrl = process.env.DATABASE_URL;
//const secretKey = process.env.SECRET_KEY;


const dirs = [
  "src",
  "src/controllers",
  "src/models",
  "src/routers",
  "views/home",
  "views/user",
  "views/about",
  "public/css",
  "public/js",
  "public/images",
  "lib"
];

const files = [
  {
    path: "src/controllers/homeController.js",
    content: ""
  },
  {
    path: "src/controllers/userController.js",
    content: ""
  },
  {
    path: "src/controllers/aboutController.js",
    content: ""
  },
  {
    path: "src/models/userModel.js",
    content: ""
  },
  {
    path: "views/home/indexView.ejs",
    content: `<!-- views/index.ejs -->
    <h1><%= title %></h1>
    <p>wellcome to home page :)</p>`
  },
  {
    path: "views/user/profileView.ejs",
    content: ""
  },
  {
    path: "views/about/aboutView.ejs",
    content: ""
  },
  {
    path: "public/app.js",
    content: ""
  },
  {
    path: "lib/myModule.js",
    content: ""
  },
  {
    path: "src/routers/router.js",
    content : `// Importation de la bibliothèque http
    const http = require('http');
    const ejs = require('ejs');
    const fs = require('fs');

    // Définition du router
    const router = (req, res) => {
      //res.setHeader('Content-Type', 'text/html');


      if (req.url === '/' || req.url === '/home')
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
        res.write('Not found');
        res.end('ERROR 404');
        res.end();
      }
    };

    module.exports = router;
`
  },
  {
      path : "server.js",
      content : `var http = require('http');
      const dotenv = require('dotenv');
      let router = require('./src/routers/router');
      let srv = require('./srv');

      const server = http.createServer(router);

      server.listen(process.env.PORT,  () => { console.log('Server listening on port' + process.env.PORT);},  () => { srv.openLocalHostUrl();});
`
},
{
  path : ".gitignore",
  content : `
# Logs
logs
*.log
npm-debug.log*

# Dependency directories
node_modules/

# Build artifacts
dist/
build/

# IDE files
.idea/
*.iml
*.DS_Store

# Environmental variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Testing artifacts


  `
}

];

const createDirectory = dir => {
  const directory = path.dirname(dir);
  if (!fs.existsSync(directory)) {
    createDirectory(directory);
  }
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const createFile = file => {
  if (!fs.existsSync(file.path)) {
    fs.writeFileSync(file.path, file.content);
  }
};

const createAppStructure = () => {
  try
  {
    dirs.forEach(dir => createDirectory(dir));
    files.forEach(file => createFile(file));

    const packageJson = {
      name: "myApp",
      version: "1.0.0",
      description: "A basic Node.js MVC application",
      main: "server.js",
      scripts: {
      start: "node server.js"
      },
      repository: {
      type: "git",
      url: "https://github.com/linnnux/nodeMVC"
    },
    author: "Your Name",
    license: "GNU GPLv3",
    devDependencies: {},
    keywords: [],
        dependencies: {
        dotenv: "^16.0.3",
        ejs: "^3.1.8",
        open: "^8.4.1",
        fs: "^0.0.1-security",


      },
    engines: {
     node: "14.x"
   }
    };

    fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
    console.log('basic structure was created with success');

    srv.runServer();




  }
  catch (e)
  {
    console.log(e);
  }
  finally
  {
    console.log('end of createAppStructure');
    readDirectory();
  }

};

module.exports = createAppStructure;

if (require.main === module)
{

  createAppStructure();
}

// list content of directory
function readDirectory()
{
  //joining path of directory
  const directoryPath = path.join(__dirname, './');
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
          // Do whatever you want to do with the file
          console.log(file);
      });
  });
};
