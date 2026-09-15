import {createReadStream} from "fs";
import http from "http";

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        const stream = createReadStream(".pages/airtag.html", {
            encoding: "utf-8",
        })
        stream.pipe(res);
    }
    else if(req.url==='/mobile'){


    }

    else{
        req.statusCode=404;
        res.end
    }

})


server.listen(3000,()=>console.log("prg9 is running at 3000...."))