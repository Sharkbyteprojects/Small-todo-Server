const localhost=[
    "::1",
    "127.0.0.1",
    "localhost",
    "::ffff:127.0.0.1"
  ];

module.exports=(req,res,next)=>{
  const current=req.connection.remoteAddress;
      if(localhost.includes(current)){
        next();
      }else{res.sendStatus(403);}
};
