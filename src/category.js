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
        this.option.value = this.id
        this.option.id = `category-${this.id}`
        return this.option
    };

    
    addToDom() {
        let catCont = Category.catContainer
        catCont.append(this.render())
        catCont.addEventListener('change', this.setActiveCategory)
       
       
    };

    
    setActiveCategory = (e) => {
        
        let activatedCat
        Category.all.forEach(c => {
            if (c.id === e.target.value) {
                c.active = true
                c.option.classList.add('activated')
                activatedCat = c
            } else {
                c.active = false
                c.option.classList.remove('activated')
            }
         
        })
        Listing.filterByCategory(activatedCat)

    };
  


    addToDrpDn(){
        const option = document.createElement('option')
        option.value  = this.id 
        option.innerText = this.name
        catDrpDn.append(option)
    }
};