class Listing {

    static all = []

    

    constructor(listing) {

        this.id = listing.id
        this.name = listing.name
        this.description = listing.description
        this.price = listing.rent_price
        this.category_id = listing.category_id

        this.listCard = document.createElement('li')
        this.listCard.className = 'list-li'
        

        this.rentBtn = document.createElement('button')
        this.rentBtn.innerText = "Rent Out"

        

        Listing.all.push(this)
    
    };


    renderList(a) {

        let listCard = document.createElement('li')
        listCard.className = 'list-li'
    

        let H3 = document.createElement('h3')
        H3.innerText = this.name

        
        let H4 = document.createElement('h4')
        H4.innerText = this.description

        let p = document.createElement('p')
        p.innerText = `$${this.price}/Day`

        
        
        this.listCard.append(H3, H4, p, this.rentBtn)
        list.appendChild(this.listCard) 
        
        this.rentBtn.addEventListener('click', this.addToCart)
            
        
        
        
        
    
    };
    
    addToCart = (e) => {       
        const btn = e.target
            btn.innerText = "Remove"
            const ul = e.target.parentNode
            
            cartLi.appendChild(ul, btn)
            btn.addEventListener('click', this.deleteListing)
    };

    
    deleteListing =(e) => {
        this.listCard.remove()
        this.rentBtn.remove()
        ListingApi.deleteAction(this.id)
    };

    static filterByCategory(filteredCat) {

        if (filteredCat) {
            for (const list of Listing.all) {
                if (list.category_id === parseInt(filteredCat.id)) {
                    list.listCard.style.display = ""
                } else {
                    list.listCard.style.display = "none"
                }           
            }
        } else {
            for (const list of Listing.all) {
                list.listCard.style.display = ""
            }
        }
        
    };

    static findResult(e) {
        const q = e.target.value.toLowerCase()
        
        
        const a = Listing.all.filter((list => {
           return list.name.toLowerCase().includes(q)}))
            debugger
        console.log(a)
        renderList(a)
        }
        
};
