
const moongose=require('mongoose');

async function db(){
    try{
    await moongose.connect(process.env.DB_URL);
    console.log("connection done");
    }
    catch(error){
        console.log("error",error);
    }
}

module.exports=db;