class CategoryApi {

    static baseURL = "http://localhost:3000/categories"

    static getCategories() {
        fetch(this.baseURL)
        .then(response => response.json())
        .then(data => {

            data['data'].forEach(element => {

                const o = new Category({id: element.id, ...element.attributes})
                o.addToDom()
            })
        })
    }
 
};


CategoryApi.getCategories()
