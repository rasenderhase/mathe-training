import * as Calculation from "./calculation.js"
import * as Utility from "./utility.js"

class Game {
    constructor(parameterses) {
        this.parameterses = parameterses.filter(function (value) {
            return value.selected;
        });
    }

    start() {
        this.startTime = new Date().getMilliseconds();
        this.createTask();
    }

    createTask() {
        //select task from parameter array randomly
        let index = Utility.random(this.parameterses.length) - 1;
        let parameters = this.parameterses[index];

        let task = Calculation[parameters.name].createTask(parameters);
        console.log(task);
    }
}

export { Game }