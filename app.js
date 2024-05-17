const express = require('express');
const app = express();
const port = 3000;
const https = require('https');
const fs = require('fs');

app.get('/api', (req, res) => {
    res.send('Hello, This is the Express Gateway with TLS/SSL');
})

const options = {
    key: fs.readFileSync('./https/private-key.pem'),
    cert: fs.readFileSync('./https/certificate.pem'),
};

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Edge gateway is running on http://localhost:${port}`);
});