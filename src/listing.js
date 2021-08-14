class Listing {

    static all = []

    

    constructor(listing) {

        this.id = listing.id
        this.name = listing.name
        this.description = listing.description
        this.price = listing.rent_price
        this.category_id = listing.category_id

        this.rentBtn = document.createElement('button')
        this.rentBtn.innerText = "Rent Out"

        

        Listing.all.push(this)
    
    };


    renderList() {

        let listCard = document.createElement('li')
        listCard.className = 'list-li'
        clearElement(listCard)

        let H3 = document.createElement('h3')
        H3.innerText = this.name

        
        let H4 = document.createElement('h4')
        H4.innerText = this.description

        let p = document.createElement('p')
        p.innerText = `$${this.price}/Day`

        
        
        listCard.append(H3, H4, p, this.rentBtn)
        list.appendChild(listCard) 
        
        if (this.rentBtn.addEventListener('click', this.addToCart)) {
            clearElement(listCard)
        }
        
        
        
    
    };
    
    addToCart = (e) => {       
        const btn = e.target
            btn.innerText = "Remove"
            const ul = e.target.parentNode
            
            cartLi.appendChild(ul, btn)
            btn.addEventListener('click', this.deleteListing)
    };

    
    deleteListing =(e) => {
        debugger
        this.rentBtn.remove()
        ListingApi.deleteAction(this.id)
    };

};
