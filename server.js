import express  from 'express'
import colors from 'colors'
import dotenv from 'dotenv'


const app= express()
//configurin env since it is in root no path addd 





app.get("/", (req,res)=>{
    res.send("<h1>welcome to my ecommerce app</h1>")
})

const port = process.env.PORT || 8080;
const devMode = process.env.DEV_MODE || 'development';

app.listen(port,()=>{
    console.log(`server is running mode ${devMode } on ${port} `.bgCyan.white)
})