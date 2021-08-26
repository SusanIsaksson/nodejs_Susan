//Detta är vår server
const express = require('express' );  //1.importerar express
const server = express();  //1.kallar på express
const port = 3000;  //1.definerar porten vi kör på

//6. body från alla anrop konverteras till json
// alla anrop som landar i resp endpoint - är body alltid i json-format
server.use(express.json)

//3. Skapa end-point (get, post) lyssnar efter "get/post"-anrop
server.get('/api', (req, res) => {
    res.json("GET")    //skicka tillbaka "Välkommen"
})

//5. Skapa endpoint POST, lägga till saker
server.post('/api', (req, res) => {
    console.log(req.body)
    res.json("POST")
})

//4.static files för att komma åt klientfiler /Skapa mapp "public" + .html, .css, .js
server.use(express.static('public'))  

//2.ligger och lyssnar på ändringar
server.listen(port, () => {        
    console.log("Server igång, välkommen!")
}) 
