var http = require('http');
var fs = require('fs');

let app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    if(req.url == "/")
    {
        fs.readFile('index.html', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error file not found");
            } else {
                res.write(data);
            }
            res.end();
        })
    }
    else if(req.url == "/about")
    {
        fs.readFile('about.html', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error file not found");
            } else {
                res.write(data);
            }
            res.end();
        })
    }
    else if(req.url == "/contact")
    {
        fs.readFile('contact.html', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Error file not found");
            } else {
                res.write(data);
            }
            res.end();
        })
    }


});
app.listen(8080, (error) => {
    if (error) {
        console.log("Something went wrong");
    } else {
        console.log("port 8080 working successfully!");
    }
});