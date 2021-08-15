class Category {

    static all = []
    static catContainer = document.querySelector('#categories-container')

    constructor(categories) {
    
        this.id = categories.id
        this.name = categories.name

        this.active = false
        this.option = document.createElement('option')
        Category.all.push(this)
    };


    
    render() {
        this.option.innerText = this.name
        this.option.id = `category-${this.id}`
        return this.option
    };

    addToDom() {
        Category.catContainer.append(this.render())
        this.addListener()
    };
    
    addListener() {
        this.option.addEventListener('click', this.setActiveCategory)
    };
    
    setActiveCategory = (e) => {
    
    };

    addToDrpDn(){
        const option = document.createElement('option')
        option.value  = this.id 
        option.innerText = this.name
        catDrpDn.append(option)
    }
};