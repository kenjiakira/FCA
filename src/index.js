require('dotenv').config()
const express = require('express')
const log = require('./utils/log')
const path = require('path')

const app = express()

app.use(express.static(__dirname+'/public'))
app.set('view engine', 'ejs');
app.set('views', __dirname+"/views");

app.get("/",(req,res)=>{
    return res.render('index.ejs')
})

app.listen(process.env.LOCAL_PORT,() => log("Hệ thống website được chạy thành công!","[ SERVER ]"))