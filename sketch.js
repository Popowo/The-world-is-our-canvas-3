var ball,position,database;
var x,y;
var x1,y1,fr,h1,h2;

function setup(){
    

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "green";
  
  

    button1=createButton("eraser");
    button1.position(450,450)
    
}
var rects = [];
var size
function draw(){
    background("white");
  
    textSize(100);
    fill("red")
    text("Draw!",130,100) 
    textSize(25);
    text("Hold Down Left Click To Paint",100,150); 
    
   
    
    if(mouseIsPressed){
      
       rects.push(createSprite(mouseX,mouseY,10,10));
      
    }
    ball.x = mouseX;
    ball.y = mouseY;

    
  button1.mouseClicked(()=>{
     for(var i=0;i<rects.length;i++){
         rects[i].remove();
     }
  })
      
    

    drawSprites();
}
