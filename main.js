import {Parameters} from './modules/parameters.js';
import {Game} from './modules/game.js';

let parameters = [];
let game = new Game();

document.querySelectorAll("#parameters-form fieldset").forEach((value) => {
    parameters.push(new Parameters(value.getAttribute("id")));
});

function registerParametersListener() {
    document.getElementById("parameters-form")?.addEventListener("submit", (ev) => {
        ev.preventDefault();
        parameters.forEach(function (value) {
            value.evaluate();
        });
        fetch(ev.target.action)
            .then((response) => {
                return response.text();
            })
            .then((html) => {
                document.body.innerHTML = html;
                registerResultListener();
                game.start(parameters);
            });
    }, { once: true });
}
registerParametersListener();

function registerResultListener() {
    document.getElementById("finish")?.addEventListener("click", (ev) => {
        ev.preventDefault();
        fetch("index.html")
            .then((response) => {
                return response.text();
            })
            .then((html) => {
                document.body.innerHTML = html;
                registerParametersListener();
            });
    }, { once : true });
}

document.querySelectorAll("#result-form").forEach(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.getAll("id").forEach((value, index) => {
        parameters.push(new Parameters(value).evaluate(urlSearchParams, index));
    });

    game.start(parameters);
});