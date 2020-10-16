var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var gamestate = "start";
var count = particles;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var division1,division2,division3,division4,division5;
var division6,division7,division8,division9,division10,division11;
var te1 = 500;
var te2 = 500;
var te3 = 500;
var te4 = 500;
var te5 = 500;
var te6 = 500;
var te7 = 500;
var te8 = 500;
var te9 = 500;
var te10 =500;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   division1 = new Divisions(0,625,10,350);
   division2 = new Divisions(80,625,10,350);
   division3 = new Divisions(160,625,10,350);
   division4 = new Divisions(240,625,10,350);
   division5 = new Divisions(320,625,10,350);
   division6 = new Divisions(400,625,10,350);
   division7 = new Divisions(480,625,10,350);
   division8 = new Divisions(560,625,10,350);
   division9 = new Divisions(640,625,10,350);
   division10 = new Divisions(720,625,10,350);
   division11 = new Divisions(800,625,10,350);
   
   

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();

  text(te1,25,500);
  text(te2,100,500);
  text(te3,175,500);
  text(te4,260,500);
  text(te5,345,500);
  text(te6,430,500);
  text(te7,495,500);
  text(te8,570,500);
  text(te9,655,500);
  text(te10,750,500);

  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   

   text("score "+score,100,50);
 
   for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();
  division10.display();
  division11.display();
  
}

function mousePressed(){

  if(gamestate!=="end"){
    particles.push(new Particle(mouseX,10, 10,10));
   count++
   score=score+500;
  }
  if(score>=2500){
    gamestate="end"
  }

  if(gamestate==="end"){
    particles = null;

  }

}