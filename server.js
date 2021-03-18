const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/fuse'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/fuse/index.html');
})

app.listen(PORT, () => {
    console.log('SERVIDOR INICIADO NA PORTA:' + PORT);
})