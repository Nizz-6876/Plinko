const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground;
var plinkos=[],division=[],particles=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height,width,20);

  for (var index = 0; index <= width; index=index+80) {
    var bar=new Division(index,height-divisionHeight/2,10,divisionHeight);
    division.push(bar);
    
  }

  for (var i = 40; i <=width; i=i+80) {
    var plinko= new Plinko(i,100,10);
    plinkos.push(plinko);
 }

 
 for (var i = 80; i <width; i=i+80) {
    var plinko= new Plinko(i,220,10);
    plinkos.push(plinko);
 }

 for (var i = 40; i <=width; i=i+80) {
   var plinko= new Plinko(i,340,10);
   plinkos.push(plinko);
 }

 for (var i = 80; i <width; i=i+80) {
  var plinko= new Plinko(i,460,10);
  plinkos.push(plinko);
}
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  for(var i=0;i<division.length;i++){
    division[i].display();
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  if (frameCount%60===0) {
    particles.push(new Particle(random(10,width-100),0,10,10));
  }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }


  

}