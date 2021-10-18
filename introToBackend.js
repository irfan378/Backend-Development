// console.log("Hello world");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Alignment</title>
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
      <style>
          * {
              box-sizing: border-box;
  
          }
  
          body {
              font-family: 'Lobster', cursive;
          }
  
          .container {
              width: 900px;
              border: 3px solid purple;
              margin: 33px auto;
              background-color: sandybrown;
  
          }
  
          .item {
              border: 3px solid grey;
              margin: 12px 3px;
              padding: 12px 2px;
              background: grey;
          }
  
          #fruits {
              float: right;
              width: 48%;
  
          }
  
          #computer {
              float: left;
              width: 48%;
  
  
          }
  
          #stationary {
              /* float: left; */
              /* clear: both; */
              clear: left;
              width: 100%;
  
  
          }
  
          p,
          h1 {
              /* text-align: right;
              text-align: left;
              text-align: center; */
              text-align: justify;
  
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <div id="fruits" class="item">
              <h3>fruits</h3>
              <p id="fruitspara" class="para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nemo explicabo similique nostrum.
                  Molestiae, tenetur sunt. Reiciendis odio itaque quo repellat, a officia earum modi! Ducimus rem culpa
                  dolor, quibusdam porro ratione. Dolorum maxime exercitationem voluptatum autem, ipsum, iure tenetur
                  reprehenderit architecto ex cumque voluptates voluptatibus repellat, soluta neque Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Porro aperiam laboriosam vero asperiores! Obcaecati, expedita quasi
                  sequi asperiores consequatur distinctio, voluptatum architecto cum necessitatibus in voluptatibus
                  blanditiis eos voluptas eaque iste quibusdam ullam! Nulla!
              </p>
          </div>
          <div id="computer" class="item">
              <h3>computer</h3>
              <p id="computerspara" class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nemo
                  explicabo similique nostrum. Molestiae, tenetur sunt. Reiciendis odio itaque quo repellat, a officia
                  earum modi! Ducimus rem culpa dolor, quibusdam porro ratione. Dolorum maxime exercitationem voluptatum
                  autem, ipsum, iure tenetur reprehenderit architecto ex cumque voluptates voluptatibus repellat, soluta
                  neque eveniet.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odio ab exercitationem voluptate eius
                  quos sequi, voluptatum, quaerat totam minus provident dolorem praesentium. Dolorem consequatur animi
                  accusantium explicabo aut vero sit, quo distinctio id!
              </p>
          </div>
          <div id="stationary" class="item">
              <h3>stationary</h3>
              <p id="stationarypara" class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nemo
                  explicabo similique nostrum. Molestiae, tenetur sunt. Reiciendis odio itaque quo repellat, a officia
                  earum modi! Ducimus rem culpa dolor, quibusdam porro ratione. Dolorum maxime exercitationem voluptatum
                  autem, ipsum, iure tenetur reprehenderit architecto ex cumque voluptates voluptatibus repellat, soluta
                  neque eveniet.</p>
          </div>
          <div id="glasses" class="item">
              <h3>stationary</h3>
              <p id="glassespara" class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nemo
                  explicabo similique nostrum. Molestiae, tenetur sunt. Reiciendis odio itaque quo repellat, a officia
                  earum modi! Ducimus rem culpa dolor, quibusdam porro ratione. Dolorum maxime exercitationem voluptatum
                  autem, ipsum, iure tenetur reprehenderit architecto ex cumque voluptates voluptatibus repellat, soluta
                  neque eveniet.</p>
          </div>
  
  
  
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
