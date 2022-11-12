import express,{Router} from 'express'
import multer  from 'multer';
import path from 'path';
import {v4} from 'uuid'
import * as fs from 'fs';



const router:Router = express.Router()
let currentID:string;

async function deleteLater(fileName:string) {
    setTimeout((word) => {console.log(word);
    }, 10000,'something');
    let fileDir = path.resolve(__dirname,'../public/uploads/');
    fs.unlinkSync(fileDir+`/${fileName}`);
}
const Storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'src/public/uploads/')
    },
    filename: (req,file,callback) => {
        currentID = v4()+path.extname(file.originalname);
        callback(null,currentID)
    }
})

const upload = multer({storage:Storage})
router.post('/',upload.single('user_file'),(req,res)=> {
    // console.log(currentID);
    res.redirect(`/uploads/${currentID}`)
})



export default router;