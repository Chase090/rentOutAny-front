class Category {

    static all = []

    constructor(categories) {
        this.id = categories.id
        this.name = categories.name

        this.active = false
        this.element = document.createElement('button')
        
        Category.all.push(this)
    };
    addToDom() {
        debugger
    }
};