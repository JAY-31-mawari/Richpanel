const Users=require('../models/User')
const jwt=require('jsonwebtoken')

const postSignUp = async(req,res) => {
    try {
        const user=await Users.create(req.body)

        let data={email:user.email,id:user._id}
        let token=jwt.sign(data,process.env.SECRET_KEY,{expiresIn:process.env.EXPIRY_DATE})

        res.cookie('token',token,{
            httpOnly:true,
            expires:new Date(Date.now()+ 1000*60*2),
            secure:true,
        })

        res.json({success:true,msg:'Account Created Successfully'})
    } catch (error) {
        res.json({success:false,msg:"Error in signup data to database"})
    }
}

const postLogin = async(req,res) => {
    let {email,password}=req.body
    try {
        let user=await Users.findOne({email})
        if(!user)
        {
            return res.json({success:false,msg:"Email ID not found"})
        }

        let isPasswordCorrect=await user.comparePassword(password) 
        if(!isPasswordCorrect)
        {
            return res.json({success:false,msg:"Password Incorrect"})
        }

        let data={email:user.email,id:user._id}
        let token=jwt.sign(data,process.env.SECRET_KEY,{expiresIn:process.env.EXPIRY_DATE})

        res.cookie('token',token,{
            httpOnly:true,
            expires:new Date(Date.now()+ 1000*60*2),
            secure:true,
        })

        res.json({success:true,msg:"Login Successfully"})
    } catch (error) {
        res.json({success:false,msg:"Error in login data to database"})
    }
}

const deleteData = async(req,res) => {
    try{
        const token=req.cookies.token
        const payload=await jwt.verify(token,process.env.SECRET_KEY)
        let email=payload.email
        const result=await Users.findOneAndDelete({email})
        res.json({success:true,msg:'Account Deleted Successfully'})
    }catch(error){
        console.log("Authentication Failed")
        res.json({success:false,msg:"Authentication Failed"})
    }
}

const getData = async(req,res) => {
    const users=await Users.find({})
    res.json({success:true,msg:users})
}

module.exports={
    postSignUp,
    postLogin,
    deleteData,
    getData
}