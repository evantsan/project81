var canvas = document.getElementById("mc");
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.lineWidth = 0.5;
ctx.strokeStyle = 'grey';
ctx.rect(150,90,1200,500)
ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'blue';
    ctx.arc(500,250,80,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'orange';
    ctx.arc(600,320,80,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black';
    ctx.arc(700,250,80,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'red';
    ctx.arc(900,250,80,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'green';
    ctx.arc(800,320,80,0,2*Math.PI);
    ctx.stroke();
    