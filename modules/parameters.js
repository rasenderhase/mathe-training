class Parameters {
    constructor(name) {
        this.name = name;
    }

    evaluate() {
        this.selected = document.querySelector("#" + this.name + " [name='selected']").checked;
        this.difficulty = document.querySelector("#" + this.name + " [name='difficulty']").value;
    }
}

export { Parameters };