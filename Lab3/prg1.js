import http from "http";
const server = http.createServer((req,res)=>{
    console.log('Welcome to Node JS');
    console.log(req.url);

    console.log("Request Method: ");
    console.log(req.mehtod);

    console.log("Request header: ");
    console.log(req.headers);

    console.log("Socket Info: ")
    // console.log(req.socket);
    console.log(req.headers.host);

    res.end("Hello");
});

const PORT = 4444;

server.listen(PORT,()=>console.log("Your server is ready"));