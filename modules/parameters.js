class Parameters {
    constructor(name) {
        this.name = name;
    }

    evaluate() {
        this.selected = document.querySelector("#" + this.name + " [name='selected']").checked;
        this.difficulty = document.querySelector("#" + this.name + " [name='difficulty']").value;
        let that = this;
        document.querySelectorAll("#" + this.name + " [name='max']").forEach(element => {
            that.max = element.value;
        });
    }
}

export { Parameters };