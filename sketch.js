//Create variables here
var  dog,dogI,happyDogI,database,foodS,foodStock;
function preload()
{
  //load images here
  
  dogI=loadImage("images/dogImg.png");
  happyDogI=loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
dog=createSprite(250,300,150,150);
dog.addImage(dogI);
dog.scale=0.2;
foodStock=database.ref('Food');
foodStock.on("value",readStock);


}


function draw() {  
background("cyan");

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogI);
}

  drawSprites();

  text("Food Remaining:"+foodS,170,120);
  //add styles here

}

function readStock(data) {
  foodS=data.val();

}

function writeStock(x){
 if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



