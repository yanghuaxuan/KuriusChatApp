const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/site'));

app.listen(port, () => {
    console.log('ExpressJS: Server listening at port ' + port);
    console.log(__dirname + '/site');
})