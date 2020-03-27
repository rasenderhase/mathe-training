import {Task} from "./task.js"
import * as Utility from "../utility.js"

export function createTask(paremeters) {
    let mult1 = Utility.random(10);
    let mult2 = Utility.random(10);

    let text = mult1 + "&middot;" + mult2;

    let result = mult1 * mult2;

    let multipleChoiceResults = [];
    if (paremeters.difficulty < 10) {
        for (let i = 0; i < paremeters.difficulty; i++) {
            let wrongResult;

            do {
                wrongResult = Utility.random(100);
            } while (wrongResult === result || multipleChoiceResults.includes(wrongResult));
            multipleChoiceResults.push(wrongResult);
        }
        multipleChoiceResults.splice(Utility.random(0, paremeters.difficulty), 0, result);
    }

    return new Task(text, result, multipleChoiceResults);
}