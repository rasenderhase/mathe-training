import {Parameters} from './modules/parameters.js';
import {Game} from './modules/game.js';

let parameters = [];
let game = new Game();

document.querySelectorAll("#parameters-form fieldset").forEach((value) => {
    parameters.push(new Parameters(value.getAttribute("id")));
});

document.getElementById("parameters-form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    parameters.forEach(function (value) {
        value.evaluate();
    });
    game.start(parameters);
    document.getElementById("result-form").scrollIntoView();
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};