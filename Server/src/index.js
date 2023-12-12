// server.js
import http, { get } from 'http';
import { URL } from 'url';
import getCharById from "./controllers/getCharById.js"


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathSegments = parsedUrl.pathname.split('/');
    
    if (pathSegments[1] === 'rickandmorty' && pathSegments[2] === 'characters') {
        const characterId = parseInt(pathSegments[3], 10);
        getCharById(res,characterId)

     
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found');
    }
});

const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});