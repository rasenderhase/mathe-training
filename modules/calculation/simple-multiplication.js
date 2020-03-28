import * as Task from "./task.js"
import * as Utility from "../utility.js"

const BASE_DIFFICULTY = 2;

export let SimpleMultiplication = {
    createTask : function createTask(paremeters) {
        let mult1 = Utility.random(10);
        let mult2 = Utility.random(10);

        let text = mult1 + "&middot;" + mult2 + " =";

        let result = mult1 * mult2;

        let max = 100;
        return Task.createTask(paremeters, max, result, text, BASE_DIFFICULTY);
    }
};