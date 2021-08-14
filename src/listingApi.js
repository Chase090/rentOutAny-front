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
        

        const formData = {
            name: nameInpt.value,
            rent_price: priceInpt.value,
            description: descInpt.value,
            category_id: catDrpDn.value
        }

        const configObj = {
            method: 'POST', 
            headers: { 
                "Content-Type": "application/json", 
                Accept: "application/json"
            },
            body: JSON.stringify(formData) 
        };

        fetch(this.baseUrl, configObj)  
        .then(r => r.json())
        .then(data => {
            debugger
            const list = data.data
            const i = new Listing({id: list.id, ...list.attributes} )
    
            i.renderList()
            
        })
    };

    static deleteAction(id) {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(`${this.baseUrl}/${id}`, configObj)
            .then(response => response.json())
            .then(json => {debugger})
        
    };


   

     
};




ListingApi.getListings()
