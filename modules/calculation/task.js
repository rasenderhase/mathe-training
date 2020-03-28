import * as Utility from "../utility.js";

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

function createTask(paremeters, max, result, text, baseDifficulty) {
    let multipleChoiceResults = [];
    if (paremeters.difficulty < 10) {
        for (let i = 0; i < paremeters.difficulty; i++) {
            let wrongResult;

            do {
                wrongResult = Utility.random(max);
            } while (wrongResult === result || multipleChoiceResults.includes(wrongResult));
            multipleChoiceResults.push(wrongResult);
        }
        multipleChoiceResults.splice(Utility.random(0, paremeters.difficulty), 0, result);
    }

    let difficulty = paremeters.difficulty * baseDifficulty;

    return new Task(text, result, multipleChoiceResults, difficulty);
}

export {Task, createTask}