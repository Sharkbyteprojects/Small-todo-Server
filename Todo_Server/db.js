let mongoserverp={};
const mongo = require('mongodb');const MongoClient = require('mongodb').MongoClient;
function addToDb(jsonobject, coll){
  return new Promise((resolve, reject)=>{
    MongoClient.connect(mongoserverp.address, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mongoserverp.database);
      var myobj = jsonobject;
      dbo.collection(coll).insertOne(myobj, function(err, res) {
        if (err){
          reject(err);
          console.log("err");
        }else{
        resolve();}
        db.close();
  });
});
  });
}
function select(coll,queryxx){
  return new Promise((res,rej)=>{
  MongoClient.connect(mongoserverp.address, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mongoserverp.database);
    var query = queryxx;
    dbo.collection(coll).find(query).toArray(function(err, result) {
      if (err) {
        rej(err);
      }
      res(result);
      db.close();
    });
  });});
}
function remo(id,coll){
  return new Promise((res,rej)=>{
  if(id&&id!={}&&id!={ }){
  MongoClient.connect(mongoserverp.address, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mongoserverp.database);
  var myquery = id;
  dbo.collection(coll).deleteOne(myquery, function(err, obj) {
    if (err) {rej(err);}else{res();}
    db.close();
  });
}); }else{
  rej("NO VALUE GIVEN");
}});
}
function upld(query,newcom,coll){
  return new Promise((reso,rej)=>{
    MongoClient.connect(mongoserverp.address, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mongoserverp.database);
      var myquery = query;
      var newvalues = { $set: newcom };
      dbo.collection(coll).updateOne(myquery, newvalues, function(err, res) {
        if (err) {rej(err);}
        reso();
        db.close();
      });
    });
  });}
module.exports=(mongoserver)=>{
  mongoserverp=mongoserver;
  return {addToDb: addToDb, select: select, delete: remo, update: upld};
};
