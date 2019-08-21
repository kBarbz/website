const express = require('express');
const request = require('request');
let app = express();
let port = 3000;
const fs = require('fs');


app.use(express.static(__dirname + '/public'));



  function jsonReader(filePath, cb) {
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
        	
            const object = JSON.parse(fileData);
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

let result;
jsonReader('./public/bedfordJSON.json', (err, team) => {
    if (err) {
        console.log(err)
        return
    }
    result = team;
})


app.get('/teamName', function(req,res){
    console.log('GET request received for teamName');
    res.send(result);
    console.log(result);
})

app.listen(port, function(){
	console.log("Server is running on port " + port);
});