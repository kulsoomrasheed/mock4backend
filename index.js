const express= require('express')
require('dotenv').config()
const cors= require('cors')
const { connection } = require('./db')
const { userRouter } = require('./routes/user.routes')
const {  docRouter } = require('./routes/employee.routes')
const app = express()
app.use(cors())
app.get("/",(req,res)=>{
    res.json({msg:"success"})
})
app.use(express.json())
app.use("/users",userRouter)
app.use("/appointments",docRouter)
app.listen(4000,async()=>{
    try{
        await connection
        console.log(`listening on port ${process.env.port}`);

    }catch(e){

    }
})