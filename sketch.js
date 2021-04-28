var dog, dogImg, happyDog, database, foodS, foodStock;

function preload() {
dogImg = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
createCanvas(500, 500);
database = firebase.database();  

dog = createSprite(250, 400, 10, 10);
dog.addImage(dogImg);

foodStock = database.ref('foodS');
foodStock.on("value", readStock);
}

function draw() { 
background(46, 139, 87);

if(keyDown(UP_ARROW)) {
writeStock(foodS);
dog.addImage(dogImg);
}

drawSprites();

textSize(30);
fill("blue");
text("foodStock", 200, 100);

textSize(15);
fill("red");
text("NOTE: Press UP_ARROW Key To Feed Drago Milk", 100, 20);
}

function readStock(data) {
foodS = data.val();
}

function writeStock(x) {
if(x <= 0) {
x = 0;
} else {
x = x-1;
}
database.ref('/').update({
Food:x,
});
}

function showError() {

}