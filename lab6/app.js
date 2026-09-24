import { products} from './data.js';
import express from 'express';



const app = express();

app.get("/",(req,res)=>{
    res.send("<h1> hello from express</h1>")
})


app.get("/api/products",(req,res)=>{
    const{description, rating, ...rest}=products[0];
    const filterProducts = products.map((product)=>{
            const {description,rating, ...rest} = product;
            return rest;
        })
    
    //res.send(filterProducts)
    //res.json(filterProducts);
    res.json({count: filterProducts.length,data:filterProducts})
})


app.get("api/products/:id",(req,res)=>{
    const {id} = req.params;
    const product = products.find((item)=>item.id===Number(id));

    if(!product){
        res.status(400).json({msg:`product not found with if:${id}`})
    }
        
    else{
        return res.status(200).json(product)

    }
})



app.listen(3333,()=>{
    console.log("server is running at 3333");
    
})