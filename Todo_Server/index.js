const onlyLocalhost=false; //UNLY LOCALHOST HAVE ACCESS TO The page
const mongoserver={address:"mongodb://mongodb", database:"todo-storage"};
const dbCollection="todos";
const ad=true;
/////////////////////////////
const db=require("./db.js")(mongoserver);
const api=require("./api.js");
const express=require("express");
const app=express();
const http=require("http").createServer(app);
const bpars=require("body-parser");
const helmet=require("helmet");
const morgan = require('morgan');
app.use(helmet());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
if(onlyLocalhost){
  const isAllowed=require("./onlyhost.js");
  app.use(isAllowed);
}
app.use(bpars.json());
app.use(bpars.urlencoded());
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/view/index.html");
});
api(app, dbCollection, db, ad);
app.use(express.static('static'))
http.listen(3000, () => {
  console.log('Server listening on http://localhost:3000\n\tON DOCKER: http://localhost:8080');
});
