//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Only for debugging code, is this needed, not otherwise
// const Render = Matter.Render;

var myengine,myworld;
var ground, ball,ball1;


function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    //Code for brown ground
    var ground_options ={
        isStatic: true,
      
    }
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);

    // Code for red box
    var redBox_options ={
        isStatic: true,
    }

    redBox = Bodies.rectangle(250,320,100,120,redBox_options);
    World.add(myworld,redBox);

    // Code for green box
    var greenBox_options ={
        isStatic: true,
    }

    greenBox = Bodies.rectangle(450,320,100,120,greenBox_options);
    World.add(myworld,greenBox);

    // Code for yellow box
    var yellowBox_options ={
        isStatic: true,
        angle:-60
        
    }



    yellowBox = Bodies.rectangle(590,320,100,20,yellowBox_options);
    // Matter.Body.setAngle(yellowBox,130)
    World.add(myworld,yellowBox);

    var orangeBox_options ={
        isStatic: true,
        angle:40
        
    }

    orangeBox = Bodies.rectangle(100,200,100,20,orangeBox_options);
    // Matter.Body.setAngle(orangeBox,130)
    World.add(myworld,orangeBox);

    // Code for ball
    var ball_options ={
        isStatic: false,
        restitution: 1.5
    }

    var ball1_options ={
        isStatic: false,
        restitution: 1.5
    }

    ball = Bodies.circle(310,100,20, ball_options);
    World.add(myworld,ball);
    
    ball1 = Bodies.circle(300,100,20, ball1_options);
    World.add(myworld,ball1);
    

    // Only for debugging code, is this needed, not otherwise
    // var render = Render.create({
    //   element: document.body,
    //   engine: myengine,
    //   options: {
    //     width: 1600,
    //     height: 700,
    //     wireframes: false
    //   }
    // });
    // Render.run(render);

    //console.log(ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);

    fill("brown")
    rect(ground.position.x,ground.position.y,800,20);
    fill("red")
    rect(redBox.position.x,redBox.position.y,100,120);
    fill("green")
    rect(greenBox.position.x,greenBox.position.y,100,120);
    
    fill("yellow")
    push();
    translate(yellowBox.position.x,yellowBox.position.y);
    rotate(-45);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();

    fill("orange")
    push();
    translate(orangeBox.position.x,orangeBox.position.y);
    rotate(45);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();
   
   
    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    
    fill("blue")
    ellipseMode(RADIUS);
    ellipse(ball1.position.x, ball1.position.y, 20, 20);
}
