import http from 'http'
import { json } from 'stream/consumers';

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    const product = {
        name:'Mobile',
        price: 25000,
        discout: "10%",
        company: "Samsung"
    };
   res.end(JSON.stringify(product));
})

server.listen(3000,()=> console.log("Server running"));