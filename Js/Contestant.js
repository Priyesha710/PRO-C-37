class Contestant{//equivalent to player
    constructor(){
        this.index = null;
        this.name = null;
        this.option = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function (data){
            playerCount = data.val();
        })
    }
    updateCount(countInput){
        database.ref('/').update({
            playerCount: countInput
        });
    }
    updatePlayerRecord(){
        var playerIndex = "contestants/contestant" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            option: this.option
        })
    }
    static getPlayerInfo(){
        database.ref("contestants/").on("value",function(data){
            allContestants = data.val();
        });
    }
}