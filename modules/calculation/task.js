class Task {

    constructor(text, result, multipleChoiceResults, difficulty) {
        this.text = text;
        this.result = result;
        this.multipleChoiceResults = multipleChoiceResults;
        this.difficulty = difficulty;
        this.startTime = Date.now();
        this.fails = 0;
        console.log("create task " + this.startTime);
    }

    success() {
        let now = Date.now();
        console.log({
            duration: now - this.startTime,
            fails: this.fails,
            difficulty: this.difficulty
        });

        return Math.round(10000. / (now - this.startTime + 1) / (this.fails + 1) * this.difficulty);
    }

    failed() {
        this.fails += 1;
    }

}

export {Task}