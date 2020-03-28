import * as Task from "./task.js"
import * as Utility from "../utility.js"

const BASE_DIFFICULTY = 1.5;

export let Subtraction = {
    createTask : function createTask(parameters) {
        let sum1 = Utility.random(0, parameters.max);
        let sum2 = Utility.random(0, sum1);

        let text = sum1 + "-" + sum2 + " =";

        let result = sum1 - sum2;

        let max = parameters.max;
        return Task.createTask(parameters, max, result, text, BASE_DIFFICULTY + max / 100);
    }
};