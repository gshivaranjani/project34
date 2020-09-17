//Create variables here
var  dog, happyDog, database, foodS, foodStock;
var dogImg,happyDogImg;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87);

  textSize(20);
  fill("red");
  text("Food Stock: "+foodS,30,50);
  

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS = data.val();
}
 

function writeStock(x) {
  if(x > 0) {
    x=x-1;
  }
  database.ref('/').update({
    
    food : x
  })
}


