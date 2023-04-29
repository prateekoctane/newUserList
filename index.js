const express = require("express");
const app = express();
const { connection } = require("./config/db");
require("dotenv").config();
const { userRouter } = require("./routes/users.routes");
const cors = require("cors")

app.use(express.json());
app.use(cors({origin:"*"}));
app.use("/users",userRouter);


app.get("/", async(req,res) => {

    try{
        res.send("HOME PAGE")
    }catch(err){
        res.send({"msg":"something went wrong","error":err.message})
    }
})


app.listen(process.env.port, async ()=>{

    try{
        await connection;
        console.log("connected to database")
    }catch(err){
        console.log("cannot connect to database");
    }
})


// [22:25, 4/29/2023] Aniket (masai Classmate) Lko Pandey: app.listen(port, async() =>{

//     await mongoose.connect(url)
    
//     }
//     [22:26, 4/29/2023] Aniket (masai Classmate) Lko Pandey: Direct index.js me l

