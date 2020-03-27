import {Task} from "./task.js"
import * as Utility from "../utility.js"

export function createTask(paremeters) {
    let mult1 = Utility.random(1, 10);
    let mult2 = Utility.random(1, 10);

    let text = mult1 + "&middot;" + mult2;

    let result = mult1 * mult2;

    return new Task(text, result);
}