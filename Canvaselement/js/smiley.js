let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
// gezicht
context.beginPath();
context.arc(130,130,40,0,2*Math.PI);
context.closePath();
context.stroke();
//oog
context.beginPath();
context.arc(290,130,40,0,2*Math.PI);
context.closePath();
context.stroke();
// oog 
context.beginPath();
context.arc(210,190,160,0,2*Math.PI);
context.closePath();
context.stroke();
// oog omleining
context.beginPath();
context.arc(130,130,30,0,2*Math.PI);
context.closePath();
context.stroke();
// oog omleining
context.beginPath();
context.arc(290,130,30,0,2*Math.PI);
context.closePath();
context.stroke();
// mond
context.beginPath();
context.arc(210,300,70,22,2*Math.PI);
context.closePath();
context.stroke();



