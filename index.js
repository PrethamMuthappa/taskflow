
const express=require('express');
const ejs=require('ejs');
const path=require('path')
const dotenv=require('dotenv')
app=express();
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

const dbs=require('./config/db');
const add=require('./routes/add')

const Port=process.env.PORT



async function main(){

    try{

        await dbs();


    app.use('/',add);
   

}
catch(error){

    throw new Error(error)

}

app.listen(Port,()=>{
    console.log(`running in ,${Port}`)
})


}

main()



