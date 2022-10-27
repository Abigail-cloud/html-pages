const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;


let startPath = path.join(__dirname, "public");

app.use(express.static(startPath));

app.get('/', function(req, res) {
    res.sendFile(path.join(startPath +'/home.html'));
    
});



app.listen(port, () => {
    console.log('Server listening on ' + port);
})