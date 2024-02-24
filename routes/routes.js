const express=require('express')
const router=express.Router()

const {postSignUp,postLogin,deleteData,getData}=require('../controllers/controller')

router.route('/signup').post(postSignUp)
router.route('/login').post(postLogin)
router.route('/delete').get(deleteData)
router.route('/getdata').get(getData)

module.exports=router