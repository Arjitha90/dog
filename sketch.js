//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
  dogImg = loadImage("Dog.png")
  dogImg1 = loadImage("happydog.png")
 
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog = createSprite(200,300)
  dog.addImage(dogImg)
 dog.scale =0.1
 
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg1)
}
text("Press UP_ARROW Key To Feed Drago Milk",100,10)
fill("black")
  textSize(30)
  stroke(10)
  drawSprites();
  //add styles here
  text("foodStock:"+foodS,100,200)
  
}
function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  
    if(x<=0){
      x=0
    }else{
      x=x-1
    }
    database.ref('/').update({
    Food:x
  })
}

