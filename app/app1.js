// app1.js
function changeContent(){
 var txt = "Some content";
 var ct = document.getElementById("content");
 ct.innerHTML = txt;
}

function init(){
 document.getElementById("bt1").onclick=changeContent;
}

// call init() after document loaded complete
window.onload=init;