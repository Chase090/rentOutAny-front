class ListingApi {

    static baseUrl = "http://localhost:3000/listings"

    static getListings() {
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(data => { 
        
            data['data'].forEach(element => {
                const i = new Listing({id: element.id, ...element.attributes})
            
        });
            
        })            
    };
}


ListingApi.getListings()
