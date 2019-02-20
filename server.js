const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(__dirname,  'dist/hockey-app'));

app.all('*', function(req, res) { 
    res.sendFile(path.join(__dirname, 'dist/hockey-app/index.html'));
});

app.route('/*', function(req, res){
    res.redirect(__dirname, 'dist/hockey-app/index.html');
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));