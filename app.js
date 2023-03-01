const express=require("express");
const collection =require("./mongo")
const cors =require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.get("/",cors(),(req,res)=>{
    
})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.join("notexist")
        }
    }
    catch(e)
    {
        res.json("notexist")
    }
})






app.post("/registerform",async(req,res)=>{
    const{email,password}=req.body
    console.log(req.body);
    const data={
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.create(req.body)
        }
    }
    catch(e)
    {
        res.json("notexist")
    }
})

app.listen(8000,()=>{
    console.log("port connected");
})