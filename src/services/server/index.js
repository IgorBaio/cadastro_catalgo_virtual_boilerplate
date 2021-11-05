const http = require('http')
const host = 'localhost';
const port = 9090;
const requestListener = function (req,res) {
    console.log('request received');
    res.setHeader('Content-type', 'text/html')
}