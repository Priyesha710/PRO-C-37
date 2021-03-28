class Question {//equivalent to form
    constructor() {
        this.title = createElement("h1");
        this.namebox = createInput("Name");
        this.answerbox = createInput("Answer");
        this.submitButton = createButton("Submit");
        this.question = createElement("h2");
    }
    hide() {
        this.namebox.hide();
        this.answerbox.hide();
        this.submitButton.hide();
    }
    display() {
        this.title.html("My Quiz");
        this.title.position(270, 100);

        this.question.html("What month of the year has 28 days?");
        this.question.position(270,200);

        var option1 = createElement("h3");
        option1.position(270,240);
        option1.html("1. January");
        var option2 = createElement("h3");
        option2.position(270,280);
        option2.html("2. February");
        var option3 = createElement("h3");
        option3.position(270,320);
        option3.html("3. March");
        var option4 = createElement("h3");
        option4.position(270,360);
        option4.html("4. All of the above.");
        this.namebox.position(300, 700);
        this.answerbox.position(490, 700);

        this.submitButton.position(600, 770);

        this.submitButton.mousePressed(() => {
            playerCount += 1;
            contestantObj.index = playerCount;
            contestantObj.name = this.namebox.value();
            contestantObj.option = this.answerbox.value();

            contestantObj.updatePlayerRecord();
            contestantObj.updateCount(playerCount);
            this.namebox.hide();
            this.answerbox.hide();
            this.submitButton.hide();
        });
    }
}