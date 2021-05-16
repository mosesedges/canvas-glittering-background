
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d')

// ctx.fillStyle = '#cf36d4';
// ctx.fillRect(150, 150, 120, 120);
// ctx.fillStyle = '#e47c6f';
// ctx.fillRect(230, 420, 90, 90);
// ctx.fillStyle = '#17ee85';
// ctx.fillRect(600, 750, 171, 171 );
// ctx.fillStyle = '#f7f443';
// ctx.fillRect(780, 310, 50, 50);



//    var symbols = "0123456789ABCDEF";
//    var color = "#"

//  for(var i = 0; i < 6; i++){
//   var color = color + symbols[Math.floor(Math.random()*16)]
//    ctx.fillStyle = color;
//  }




function Circle (x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;


  this.draw = function(){

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 87, Math.PI * 2, false);
  ctx.strokeStyle = 'rgb(' + Math.floor(Math.random() * 255) + ',' 
  +Math.floor(Math.random() * 255) + ','
  +Math.floor(Math.random() * 255) + ')';
  ctx.stroke();
  // ctx.fill();
  

  
  ctx.font = "40px comic Sans MS";
  ctx.textAlign='center';
  ctx.fillStyle = 'orange';
  ctx.lineWidth=2
  
  ctx.fillText('I AM EDGES ', canvas.width/2,
  canvas.height/2.5);
  ctx.fillStyle = 'aliceBlue';
  ctx.fillText('A WEB DEVELOPER', canvas.width/2,
  canvas.height/2);





  }

  this.update = function() {
    if(this.x + this.radius > innerWidth ||
      this.x - this.radius < 0 ){
        this.dx = -this.dx;
    }

    if(this.y + this.radius > innerHeight ||
      this.y - this.radius < 0 ){
        this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();

  }
}

var circleArray = [];

for(var i = 0 ; i < 100 ; i++){
  var radius = Math.random() * 5;
  var x = Math.random()* (innerWidth - radius * 2) + radius;
  var y = Math.random()* (innerHeight - radius * 2) + radius;
  var dx = (Math.random()-0.5 * 2)
  var dy = (Math.random()-0.5 * 2)

  circleArray.push(new Circle(x, y, dx, dy, radius));
}



function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth,innerHeight);
for(var i = 0; i < circleArray.length; i++){
  circleArray[i].update() }
}

animate();







// for (var i = 0; i < 100; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var r = Math.floor(Math.random() * 50);

  
// }






// ctx.fillStyle = '#f7f443';
// for (var i = 0; i < 70; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var h = Math.floor(Math.random() * 50);
//   var w = Math.floor(Math.random() * 100);
//   ctx.fillRect(x, y, 50, 50)
// }


// ctx.beginPath();
// ctx.moveTo(80, 120);
// ctx.lineTo(150, 50);
// ctx.lineTo(930, 50);
// ctx.lineTo(1000, 150);
// ctx.lineTo(1000, 1000);
// ctx.lineTo(80, 1000);
// ctx.lineTo(80, 120);
// ctx.strokeStyle = 'orange';

// ctx.stroke();

