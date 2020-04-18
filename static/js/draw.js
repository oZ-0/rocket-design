/*Dessin d'une fusée avec 2 étages et boosters*/
var canvas = document.getElementById("myCanvas");
var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight]
canvas.width = document.getElementById("sidebar").offsetWidth
canvas.height = document.getElementById("sidebar").offsetHeight
console.log(dimension[0])
console.log(dimension[1])
midy = canvas.height/2
midx = canvas.width/2
console.log(midx, midy)
ratioV = canvas.height/410
ratioH = canvas.width/150
var ctx = canvas.getContext("2d");

//Dessin du contour
ctx.beginPath();
ctx.moveTo(midx-70*ratioV, 0);
ctx.lineTo(midx-70*ratioV, canvas.height);
ctx.lineTo(midx+70*ratioV, canvas.height);
ctx.lineTo(midx+70*ratioV, 0);
ctx.lineTo(midx-70*ratioV, 0);
ctx.stroke();

/*Dessin de la coiffe*/
ctx.fillStyle = '#cce6ff'
ctx.beginPath();
ctx.moveTo(midx-20*ratioV, 50*ratioV+10);
ctx.quadraticCurveTo(midx, -50*ratioV+10, midx+20*ratioV, 50*ratioV+10);
ctx.fill();

//Dessin du second Etage
ctx.fillRect(midx-20*ratioV, 50*ratioV+10, 40*ratioV, 100*ratioV-1+10);
ctx.beginPath()
ctx.moveTo(midx-20*ratioV, 50*ratioV+10)
ctx.lineTo(midx+20*ratioV, 50*ratioV+10)
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.moveTo(midx-20*ratioV, 150*ratioV-1+10)
ctx.lineTo(midx+20*ratioV, 150*ratioV-1+10)
ctx.closePath()
ctx.stroke()

//Dessin du premier Etage;
ctx.beginPath()
ctx.moveTo(midx-30*ratioV, 180*ratioV+10)
ctx.lineTo(midx-20*ratioV, 150*ratioV+10)
ctx.lineTo(midx+20*ratioV, 150*ratioV+10)
ctx.lineTo(midx+30*ratioV, 180*ratioV+10)
ctx.lineTo(midx-30*ratioV, 180*ratioV+10)
ctx.closePath()
ctx.fill()
ctx.fillRect(midx-30*ratioV, 180*ratioV+10-1, 60*ratioV, 170*ratioV+1);

//Dessin du booster gauche;
ctx.fillRect(midx-(30+20)*ratioV-1, 220*ratioV+10, 20*ratioV, 130*ratioV);

ctx.beginPath()
ctx.moveTo(midx-30*ratioV-1,180*ratioV+10)
ctx.lineTo(midx-30*ratioV-1,220*ratioV+10)
ctx.lineTo(midx-50*ratioV-1,220*ratioV+10)
ctx.bezierCurveTo(midx-50*ratioV+1, 200*ratioV+10, midx-35*ratioV, 180*ratioV+10, midx-30*ratioV, 180*ratioV+10)
ctx.closePath();
ctx.fill()

ctx.beginPath()
ctx.moveTo(midx-30*ratioV, 180*ratioV+10)
ctx.lineTo(midx-30*ratioV, 350*ratioV+10)
ctx.closePath()
ctx.stroke()

//Dessin du booster droit
ctx.fillRect(midx+30*ratioV+1, 220*ratioV+10, 20*ratioV, 130*ratioV);

ctx.beginPath()
ctx.moveTo(midx+30*ratioV+1, 180*ratioV+10)
ctx.lineTo(midx+30*ratioV+1, 220*ratioV+10)
ctx.lineTo(midx+50*ratioV+1, 220*ratioV+10)
ctx.bezierCurveTo(midx+50*ratioV+1, 200*ratioV+10, midx+35*ratioV, 180*ratioV+10, midx+30*ratioV, 180*ratioV+10)
ctx.closePath();
ctx.fill()

ctx.beginPath()
ctx.moveTo(midx+30*ratioV, 180*ratioV+10)
ctx.lineTo(midx+30*ratioV, 350*ratioV+10)
ctx.closePath()
ctx.stroke()

//Dessin du moteur central 
ctx.fillStyle = '#000000'
ctx.beginPath();
ctx.moveTo(midx, 350*ratioV+10);
ctx.lineTo(midx-15*ratioV, 385*ratioV+10);
ctx.lineTo(midx+15*ratioV, 385*ratioV+10);
ctx.closePath()
ctx.fill();

//Dessin du moteur gauche
ctx.beginPath();
ctx.moveTo(midx-40*ratioV-1, 350*ratioV+10);
ctx.lineTo(midx-50*ratioV, 375*ratioV+10);
ctx.lineTo(midx-30*ratioV-2, 375*ratioV+10);
ctx.closePath()
ctx.fill();

//Dessin du moteur droit
ctx.beginPath();
ctx.moveTo(midx+40*ratioV+1, 350*ratioV+10);
ctx.lineTo(midx+50*ratioV, 375*ratioV+10);
ctx.lineTo(midx+30*ratioV+2, 375*ratioV+10);
ctx.closePath()
ctx.fill();