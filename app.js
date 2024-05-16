const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`Edge gateway is running on http://localhost:${port}`);
});