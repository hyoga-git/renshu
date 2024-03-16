const express=require("express");
const app=express();
const PORT=3000;
app.use(express.static("views"));

app.get("/",(req,res)=>{
    console.log("サーバー起動")
    res.render("a.ejs")
})

app.listen(PORT,()=>{
    console.log("サーバーを起動しました")
})