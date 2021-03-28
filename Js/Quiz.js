class Quiz {//equivalent to game
    constructor() {

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        });
    }
    updateState(stateInput) {
        database.ref('/').update({
            gameState: stateInput
        });
    }
    async start() {
        if (gameState === 0) {
            contestantObj = new Contestant();
            var playerCountRef = await database.ref('playerCount').once("value");

            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                contestantObj.getCount();
            }

            questionObj = new Question();
            questionObj.display();
        }
    }
    end() {
        questionObj.hide();
        var y = 600;
        Contestant.getPlayerInfo();
        if (allContestants !== undefined) {
            background("yellow");
            textSize(30);
            fill("purple");
            text("*The correct answer and the one who gave it is highlighted in green!",270,520);
            var contestant;
            for (var cont in allContestants) {
                database.ref("contestants/"+cont).on("value",function (data){
                    contestant = data.val();
                });
                console.log(contestant.name, contestant.option);
                if (contestant.option === "4") {
                    fill("green");
                   // console.log(contestant);
                }
                else {
                    fill("black");
                }
                textSize(20);
                text(contestant.name + ": " + contestant.option, 600, y);
                y += 30;
            }


        }
    }
}