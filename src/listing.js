class Listing {

    static all = []

    static list = document.querySelector('#Listings')

    constructor(listing) {

        this.id = listing.id
        this.name = listing.name
        this.description = listing.description
        this.rent_price = listing.rent_price
        this.category_id = listing.category_id

        Listing.all.push(this)
        debugger
    }


};