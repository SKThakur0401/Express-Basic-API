const express = require("express")

const app= express()
const PORT= 9000

app.use("/", (req,res)=>{
    res.json({message:"Hello from express!!!"})
})

app.listen(PORT, ()=>{
    console.log("Starting server on port " + PORT)
})

