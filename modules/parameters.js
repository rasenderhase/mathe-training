class Parameters {
    constructor(name) {
        this.name = name;
    }

    evaluate(urlSearchParameters, index) {
        if (urlSearchParameters) {
            this.selected = urlSearchParameters.getAll("selected")[index] === "on";
            this.difficulty = urlSearchParameters.getAll("difficulty")[index];
            this.max = urlSearchParameters.getAll("max")[index];
            return this;
        }
        this.selected = document.querySelector("#" + this.name + " [name='selected']").checked;
        this.difficulty = document.querySelector("#" + this.name + " [name='difficulty']").value;
        let that = this;
        document.querySelectorAll("#" + this.name + " [name='max']").forEach(element => {
            that.max = element.value;
        });
        return this;
    }
}

export { Parameters };