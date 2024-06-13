const express = require("express");
const app = express();
const port = 8080;
app.listen(port,()=>{
    console.log(`listening on ${port}`)
});
app.use(express.urlencoded({extended:true}));
app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`GET Response, welcome ${user}`)
});
app.post("/register",(req,res)=>{
    let {user,password} = req.body;
    res.send(`POST request, welcome ${user}`);
})