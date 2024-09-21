const http = require('http');

const server = http.createServer(function(req,res){
    if(req.url === '/'){
     res.end("Hey there")
    }
    else if (req.url === '/about'){
        res.end("On about page")
    }
    else{
        res.end("page not found")
    }
})

server.listen(3000);