import * as Task from "./task.js"
import * as Utility from "../utility.js"

const BASE_DIFFICULTY = 1;

export let SimpleMultiplication = {
    createTask : function createTask(parameters) {
        let mult1 = Utility.random(2, 10);
        let mult2 = Utility.random(2, parameters.max);

        let text = mult1 + "&middot;" + mult2 + " =";

        let result = mult1 * mult2;

        let max = parameters.max * 10;
        return Task.createTask(parameters, max, result, text, BASE_DIFFICULTY + parameters.max / 10);
    }
};