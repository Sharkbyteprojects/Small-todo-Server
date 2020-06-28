module.exports=(app, dbCollection, db, ad)=>{
  app.get("/api/select",(req,res)=>{
    var query= req.query||{};
    if(query.complete){
      if(query.complete=="true"){
        query.complete=true;
      }else{
        query.complete=false;
      }
    }
    db.select(dbCollection, query).then((data)=>{
      res.jsonp({error: false, data: data});
    },(err)=>{
      res.status(500);
      res.jsonp({error: true, data: err});
    });
  });
  app.get("/api/delete",(req,res)=>{
    if(ad){
      var query= req.query||{};
        db.delete(query,dbCollection).then((ok)=>{
          res.jsonp({statuscode: 0, error: false});
        }, (err)=>{
          res.status(500);
          res.jsonp({statuscode: 1, error: true});
        });

    }else{
      res.sendStatus(403);
    }
  });
  app.post("/api/update",(req,res)=>{
    const toAppEnd={
      "id":req.body.id
    };
    var sd={"complete":req.body.complete};
    if(req.body.complete=="true"){
      sd.complete=true;
    }else{
      sd.complete=false;
    }
    db.update(toAppEnd,sd,dbCollection).then((ok)=>{
      res.jsonp({statuscode: 0, error: false});
    },(err)=>{
      res.status(500);
      res.jsonp({statuscode: 1, error: true});
    });
  });
  app.post("/api/add",(req,res)=>{
    if(req.body.text==""||!req.body.text||req.body.coll==""||!req.body.coll){
      res.sendStatus(400);
    }else{
    const toAppEnd={
      "id": JSON.stringify(Date.now()),
      "complete":false,
      "text":req.body.text,
      "coll": req.body.coll
    };
    db.addToDb(toAppEnd,dbCollection).then((ok)=>{
      res.jsonp({statuscode: 0, error: false});
    },(err)=>{
      res.status(500);
      res.jsonp({statuscode: 1, error: true});
    });}
  });
}
