import {Parameters} from './modules/parameters.js';
import {Game} from './modules/game.js';

let parameters = [];

document.querySelectorAll("#parameters-form fieldset").forEach((value) => {
    parameters.push(new Parameters(value.getAttribute("id")));
});

document.getElementById("parameters-form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    parameters.forEach(function (value) {
        value.evaluate();
    });
    new Game(parameters).start();
});