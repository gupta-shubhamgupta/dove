window.onload=function(){
	
	
    
   var inp=window.location.href;
   
   
   var finaluri =spliting(inp,'?')[1];
   var decryptToken = CryptoJS.AES.decrypt(finaluri,'#').toString(CryptoJS.enc.Utf8);
   var message = decryptToken.split("!SpC!");
   var decodedArr = finaluri.split("%2F");
   let utf8decoder = new TextDecoder();
   let u8arr = new Uint8Array(decodedArr);
   var done=utf8decoder.decode(u8arr);
   var values=spliting(done,'#|#');
    var fname = values[1];
    var sname = values[3];
    var msg = values[5];
   
   
    document.getElementById("fname").innerHTML=message[0];
   document.getElementById("sname").innerHTML=message[1];
   document.getElementById("mheader").innerHTML=`${message[0]} has sent you a secret message and a beautiful song`;
   document.getElementById("msg").innerHTML=message[2];
   
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
