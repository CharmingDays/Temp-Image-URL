import express from 'express'
import path from 'path';
import uploads from './routes/uploads'; 
const appPort:number= 8000;
const app = express()




app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'public')))
app.use('/uploads',uploads)


app.get('/',(req,res)=>{
    let p = path.resolve(__dirname,'public/uploads')
    console.log(p);
    return res.render('index')
})


app.listen(appPort,()=>{
    console.log("listening on port",appPort);
})