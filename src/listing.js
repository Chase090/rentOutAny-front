class Listing {

    static all = []

    

    constructor(listing) {

        this.id = listing.id
        this.name = listing.name
        this.description = listing.description
        this.rent_price = listing.rent_price
        this.category_id = listing.category_id

        this.element = document.createElement('li')
        this.element.id = `list-${listing.id}`
        this.element.dataset.id = listing.id


        Listing.all.push(this)
    
    };

    renderList() {
        let lsitCard = document.createElement('div')
        lsitCard.className = 'list-div'

        let H3 = document.createElement('h3')
        H3.innerText = this.name

        
        let H4 = document.createElement('h4')
        H4.innerText = this.description

        let p = document.createElement('p')
        p.innerText = `$${this.rent_price}`
        
        lsitCard.append(H3, H4, p)
        list.appendChild(lsitCard)
        
    };

};