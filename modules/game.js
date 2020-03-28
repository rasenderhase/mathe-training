import * as Calculation from "./calculation.js"
import * as Utility from "./utility.js"

class Game {
    constructor(parameterses) {
        this.parameterses = parameterses.filter(function (value) {
            return value.selected;
        });

        document.getElementById("result-form").addEventListener("submit", (ev => {
            ev.preventDefault();
            let manualResultInput = document.getElementById("manual-result-input");
            let manualInputValue = manualResultInput.value;

            let inputNumber = parseInt(manualInputValue);

            if (!isNaN(inputNumber)) {
                if (inputNumber === this.task.result) {
                    this.startTask();
                }

                // failed!
                manualResultInput.focus();
                manualResultInput.select();
            }

            //input has bad format
            manualResultInput.select();
        }));

        document.getElementById("multiple-results").addEventListener("click", (ev => {
            if ("true" === ev.target.getAttribute("data-is-result")) {
                this.startTask();
            } else {
                // failed !
            }
        }));
    }

    start() {
        this.startTime = new Date().getMilliseconds();
        this.startTask();
    }

    startTask() {
        //select task from parameter array randomly
        let index = Utility.random(this.parameterses.length) - 1;
        let parameters = this.parameterses[index];

        this.task = Calculation[parameters.name].createTask(parameters);
        let manualResultInput = document.getElementById("manual-result-input");
        manualResultInput.value = "";
        manualResultInput.focus();

        this.setUiStates();
    }

    setUiStates() {
        document.getElementById("task-text").innerHTML = this.task.text;
        let multipleResultsDiv = document.getElementById("multiple-results");
        let manualResultDiv = document.getElementById("manual-result");
        let manualResultInput = document.querySelector("#manual-result [name='manual-result']");
        if (this.task.multipleChoiceResults.length) {
            multipleResultsDiv.style.display = "";
            manualResultDiv.style.display = "none";
            manualResultInput.removeAttribute("required");

            for (let i = 0; i < this.task.multipleChoiceResults.length; i++) {
                let oneResultDiv;

                if (multipleResultsDiv.children.length > i) {
                    oneResultDiv = multipleResultsDiv.children.item(i);
                } else {
                    oneResultDiv = document.createElement("div");
                    multipleResultsDiv.appendChild(oneResultDiv);
                }

                oneResultDiv.innerHTML = this.task.multipleChoiceResults[i];
                oneResultDiv.setAttribute("data-is-result", String(this.task.multipleChoiceResults[i] === this.task.result))
            }

            for (let i = multipleResultsDiv.children.length - 1; i >= this.task.multipleChoiceResults.length ; i--) {
                multipleResultsDiv.removeChild(multipleResultsDiv.children.item(i));
            }

        } else {
            multipleResultsDiv.style.display = "none";
            manualResultDiv.style.display = "block";
            manualResultInput.setAttribute("required", "required");
        }
    }
}

export { Game }