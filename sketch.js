var car;
var database,position;

function setup(){
    
    //introducing database
    database = firebase.database();
    console.log(database);
    
    createCanvas(500,500);
    car = createSprite(250,250,10,10);
    car.shapeColor = "purple";
    
var carPosition = database.ref('ball/position')

carPosition.on("value",readPosition, showError);
}

function draw(){
    background("white");

    if(position !== undefined)
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

   database.ref('ball/position').set({

    'x':position.x+x,
    'y':position.y+y,

   })


}

function readPosition(data){
    position = data.val();
    
    console.log(position.x);
    console.log(position.y);

    car.x = position.x;
    car.y = position.y;

}

function showError(){

    console.log("shows error in the database");

}
