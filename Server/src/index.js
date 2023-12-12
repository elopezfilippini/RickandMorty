// server.js
import http from 'http';
import { URL } from 'url';
import { charactersData } from './utils/data.js';

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathSegments = parsedUrl.pathname.split('/');
    
    if (pathSegments[1] === 'rickandmorty' && pathSegments[2] === 'characters') {
        const characterId = parseInt(pathSegments[3], 10);
        const character = charactersData.find(char => char.id === characterId);

        if (character) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Character not found');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found');
    }
});

const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});