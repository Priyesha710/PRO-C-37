var database;

var playerCount,allContestants,quizObj, gameState;
var contestantObj, questionObj;
function preload(){

}
function setup(){
  createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();

   quizObj = new Quiz();

   gameState = 0;

   quizObj.getState();
   quizObj.start();
}
function draw(){
  if(playerCount == 4){
    quizObj.updateState(1);
  }
  if(gameState == 1){
    clear();
    quizObj.end();
    var resetButton = createButton("reset");
    resetButton.position(100,400);
    resetButton.mousePressed(() => {
        quizObj.updateState(0);
        contestantObj.updateCount(0);
        var contestantsInfoRef = database.ref('contestants');
        contestantsInfoRef.remove();
    });
  }
}
