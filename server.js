require('dotenv').config()
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const port=process.env.PORT || 4000
const path=require('path')
const fs=require('fs')
const router=require('./routes/routes')
const connectDB=require('./db/connect')

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+'/signup.html'))
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+'/login.html'))
})

app.get("/connect",(req,res)=>{
    res.sendFile(path.join(__dirname+'/connect.html'))
})

app.get('/permission',(req,res)=>{
    res.sendFile(path.join(__dirname+'/permission.html'))
})

app.use('/api/v1/',router)

const start = async(req,res) => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server is successfully running on port ${port}`)
        })
    } catch (error) {
       console.log("error") 
    }
}
start()