const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var hero;
var fly;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block2,block13,block14,block15,block16,block17,block18,block19,block20;
var monster;
var backgroundImg;

function preload() {

backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);

  hero = new Hero(400,800,250);

   fly = new Fly(hero.body,{x:500,y:50});

    monster = new Monster(1100,550,300);

    block1 = new Blocks(900,100,70,70);
    block2 = new Blocks(900,100,70,70);
    block3 = new Blocks(900,100,70,70);
    block4 = new Blocks(900,100,70,70);
    block5 = new Blocks(900,100,70,70);
    block6 = new Blocks(900,100,70,70); 
    block7 = new Blocks(800,100,70,70);
    block8 = new Blocks(800,100,70,70);
    block9 = new Blocks(800,100,70,70);
    block10 = new Blocks(800,100,70,70);
    block11 = new Blocks(800,100,70,70);
    block12 = new Blocks(800,100,70,70);
    block13 = new Blocks(700,100,70,70);
    block14 = new Blocks(700,100,70,70);
    block15 = new Blocks(700,100,70,70);
    block16 = new Blocks(700,100,70,70);
    block17 = new Blocks(700,100,70,70);
    block18 = new Blocks(700,100,70,70);
    block19 = new Blocks(700,100,70,70);
    block20 = new Blocks(700,100,70,70);

    //monster = new Monster(800,100,40);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);


  ground.display();

  hero.display();

  fly.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display(); 
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    monster.display();

  

}

function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

