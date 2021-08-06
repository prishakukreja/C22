const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var myengine,myworld;
var object;
var ball;

function setup() {
  createCanvas(400,400);

  myengine= Engine.create();
  myworld=myengine.world;

  var options={
    isStatic:true
  }

object=Bodies.rectangle(200,380,400,50,options);
World .add(myworld,object);
var balloptions={
  restitution: 1 


}

ball=Bodies.circle(100,100,20,balloptions)
World . add(myworld,ball)
console.log(object)
 
}

function draw() {
  background(0);  
  Engine.update (myengine);
  rectMode (CENTER);

rect(object .position .x,object .position .y,400,50)
ellipseMode(RADIUS) 

ellipse (ball.position.x,ball.position.y,20,20)
}