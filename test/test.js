import * as Utility from "../modules/utility.js"

function assertThat() {
    let msg, actual, expected, a = 0;
    let args = Array.prototype.slice.call(arguments);

    args = args.map(value => typeof value === "function" ? value() : value);

    if (args.length === 3) {
        msg = arguments[a++];
    }
    actual = arguments[a++];
    expected = arguments[a++];

    console.assert(actual === expected, "FAILED: " + msg + " - expected:" + expected + ", got: " + actual);
}

let randomValue = 1;
Math.random = () => randomValue;

randomValue = 0.99999;
assertThat(Utility.random(2, 4), 4);
randomValue = 0.9;
assertThat(Utility.random(2, 4), 4);
randomValue = 0.8;
assertThat(Utility.random(2, 4), 4);
randomValue = 0.7;
assertThat(Utility.random(2, 4), 4);
randomValue = 0.6;
assertThat(Utility.random(2, 4), 3);
randomValue = 0.5;
assertThat(Utility.random(2, 4), 3);
randomValue = 0.4;
assertThat(Utility.random(2, 4), 3);
randomValue = 0.3;
assertThat(Utility.random(2, 4), 2);
randomValue = 0.2;
assertThat(Utility.random(2, 4), 2);
randomValue = 0.1;
assertThat(Utility.random(2, 4), 2);
randomValue = 0.0;
assertThat(Utility.random(2, 4), 2);

randomValue = 0.99999;
assertThat(Utility.random(2, 6), 6);
randomValue = 0.9;
assertThat(Utility.random(2, 6), 6);
randomValue = 0.8;
assertThat(Utility.random(2, 6), 6);
randomValue = 0.7;
assertThat(Utility.random(2, 6), 5);
randomValue = 0.6;
assertThat(Utility.random(2, 6), 5);
randomValue = 0.5;
assertThat(Utility.random(2, 6), 4);
randomValue = 0.4;
assertThat(Utility.random(2, 6), 4);
randomValue = 0.3;
assertThat(Utility.random(2, 6), 3);
randomValue = 0.2;
assertThat(Utility.random(2, 6), 3);
randomValue = 0.1;
assertThat(Utility.random(2, 6), 2);
randomValue = 0.0;
assertThat(Utility.random(2, 6), 2);

let i;
let countNumbers = [0, 0, 0, 0, 0];
for (i = 0; i < 1; i = i + 0.01) {
    randomValue = i;
    countNumbers[Utility.random(0, 4)]++;
}
let last = countNumbers[0];
countNumbers.forEach((value, index) => {
   assertThat("value at index " + index, value, last);
});

