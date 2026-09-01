import http from 'http'

const server = http.createServer((req,res)=>{
    console.log("req.url : ",req.url);
    if(req.url == "/product"){
        res.end("<h1>procuct Page</h1>");
    } else if (req.url == "/cart"){
        res.end("<h1>product is added to cart</h1>")
    } else if(req.url === '/checkout'){
        res.end("<h1>Checkout page</h1>");
    } 
    else {
        res.statusCode = 404;
        res.end(`
            <h1>404, Not found</h1>
            <p>Page not found</p>
            <a href='/'>Home</a>`);
    }

})

server.listen(4444,()=> console.log("server is running"));