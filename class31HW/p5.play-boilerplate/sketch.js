const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var plinkos=[];
var particles=[];
var divisions=[];
var divisionHeight=300;
var ground,ground1,ground2;


function setup() {
  createCanvas(480,800);
  

  engine=Engine.create();
  world=engine.world;

 

for(var k=0;k<=width;k=k+80){
 divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight))
}

  ground=new Ground(0,800,1200,10);
  

  for (var j = 75; j <=width; j=j+50) 
  {
       plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {  
     plinkos.push(new Plinko(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {  
     plinkos.push(new Plinko(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {  
     plinkos.push(new Plinko(j,375,10));
  }


}

function draw() {
  background(0);  
  Engine.update(engine);
 
  
  ground.display();


  for (var j = 0; j < plinkos.length; j++) {
      plinkos[j].display();    
  }
  
  for (var i = 0; i < particles.length; i++) {
      particles[i].display();
  }



  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,20));    
  }

  for (var k=0; k < divisions.length; k++){
    divisions[k].display();
}


  
   
  drawSprites();


}



