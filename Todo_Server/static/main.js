
var libiothek=[];
var dsffaeheawiohaweiu= function(){};
function reqss(onyes){
  dsffaeheawiohaweiu=()=>{$("div.xcond").slideDown(2000);$("div.mbb.container").prop("style", "display:none;");onyes();};
  $("div.mbb.container").slideDown(500);
  $("div.xcond").slideUp("200");
}
function stand(){
  $( "tbody" ).html("");
var normafdssdffdsl=  {"coll": "maincoll"};
if($("input.filter").is(":checked")){
   normafdssdffdsl.complete="false";
}
  $.get( "/api/select", normafdssdffdsl, function( data ) {
    console.log(data);
    if(!data.error){
      libiothek=data.data;
      function clee(string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
       libiothek.forEach((ele)=>{
         var addd="";
        var daa="";
         if(ele.complete){
           addd+=" checked=\"checked\""
           daa+=" class=\"che\""
         }

        $( "tbody" ).append(`<tr${daa}><th><button class="btn btn-danger" onclick="rewhefsads(${ele.id})">X</button></th><th><input onclick="onclickc(${ele.id})" id="${ele.id}" type="checkbox"${addd}></th><th>${clee(ele.text)}</th></tr>`);
      });
    }else{
      alert("ERROR\nPERFORM RELOAD");
      document.location.reload();
    }
  }, "json");
}(()=>{

  $(document).ready(()=>{$("button.no.bno").click(()=>{
    $("div.mbb.container").prop("style", "display:none;");
  dsffaeheawiohaweiu=()=>{};$("div.xcond").slideDown(2000);
  });
    $("input.filter").click(()=>{setTimeout(()=>{stand();}, 100);});
  stand();
function xooxo(){
  var xuddoi=document.getElementById('addtopicdf').value=="";

$("button.send").prop("disabled",xuddoi);
}xooxo();$("button.yes.byes").click(()=>{
  dsffaeheawiohaweiu();
});
$("input.addtopicdf").keyup(xooxo);
$("button.send").click(()=>{
  var has=document.getElementById('addtopicdf').value;
  $.post("/api/add",{"coll":"maincoll", "text":has},function( data ) {
     if(data.error){
       alert("CONNECTION ERROR!");
     }else{
       stand();
       document.getElementById('addtopicdf').value="";
  xooxo();   }
  }, "json");
});
  });
})();
function onclickc(id){
setTimeout(()=>{
var chef=document.getElementById(id).checked;
$.post( "/api/update", {"id": id, "complete":JSON.stringify(chef)},function( data ) {

   if(data.error){
     document.getElementById(id).checked!=chef;
     alert("CONNECTION ERROR!");
   }else{
     stand();
   }
}, "json");
}, 100);
}

function rewhefsads(id){
  reqss(()=>{
  $.get("/api/delete",{"id":id},function( data ) {
     if(data.error){
       alert("CONNECTION ERROR!");
     }else{
       stand();
     }
  }, "json");});
}
