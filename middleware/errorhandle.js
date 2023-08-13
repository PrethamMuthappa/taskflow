const notfound=(req,res,next)=>{
const error=new Error(`not found ${req.url}`)
res.status(404);
next(error)

}

const errorhandle=(err,req,res,next)=>{
    const statuscode=res.statuscode==200?500:res.statuscode;
    res.status(statuscode);
    res.json({
        message:err?.message
    })
}

module.exports= {notfound,errorhandle}