window.onload=function(){
	
	
    
   
   var inp=window.location.href;
   
   
   var finaluri =spliting(inp,'?')[1];
	console.log("fin "+finaluri);
   var decodedArr = finaluri.split("%2F");
   
   let utf8decoder = new TextDecoder();
   let u8arr = new Uint8Array(decodedArr);
   var done=utf8decoder.decode(u8arr);
console.log("do "+done);
   var values=spliting(done,'#|#');
    console.log("va "+values);
    var fname = values[1];
	console.log("new "+fname);
    var sname = values[3];
    var msg = values[5];
   
   
    document.getElementById("fname").innerHTML=fname;
   document.getElementById("sname").innerHTML=sname;
   document.getElementById("mheader").innerHTML=`${fname} has sent you a secret message and a beautiful song`;
   document.getElementById("msg").innerHTML=msg;
   
}
function spliting(unsplited,key) {
     
       var splitted =unsplited.split(key);
       return splitted;
   }

$(document).ready(function(){
    $(".container1").hide();
    
        setTimeout(function(){
            $("#ontime").click();
   
        },8000)
})
