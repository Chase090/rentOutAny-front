class ListingApi {

    static baseUrl = "http://localhost:3000/listings"
    static list = document.querySelector('#Listings')
    // static createForm = document.querySelector('create-list-form')

    static getListings() {
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(data => { 
        
            data['data'].forEach(element => {
                const i = new Listing({id: element.id, ...element.attributes})
                i.renderList()
            });
            
        });            
    };

    static createListing() {
        debugger

        const formData = {
            name: ,
            price:,
            description:,
            category_id:
        }




    };

   

     


}


ListingApi.getListings()
