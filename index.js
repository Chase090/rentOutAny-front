
// list
const list = document.querySelector('#items-list')
const listDiv = document.querySelector('#listings')
const rentedList = document.querySelector("#rented-list")

// nav
const searchBar = document.querySelector('.search')
const createListButton = document.querySelector('#create-list-form-button')

const cancel = document.querySelector('#cancel')


// form
const formContainer = document.querySelector('#form-container')
const nameInpt = document.querySelector('#input-name')
const priceInpt = document.querySelector('#rent-price')
const descInpt = document.querySelector('#list-desc')
const submitInpt = document.querySelector('#create-button')
const catDrpDn = document.querySelector('#categories-selection')

// cart
const cartButton = document.querySelector('#cart-rent')
const cartDiv = document.querySelector('#rented')
const cartLi = document.querySelector('#rented-list')
const back = document.querySelector('#back')

// events

cartButton.addEventListener('click', cartButtonFlow)

back.addEventListener('click', backButtonFlow)

createListButton.addEventListener('click', createListFlow )

cancel.addEventListener('click', cancelFlow)

searchBar.addEventListener('keyup', Listing.findResult)

submitInpt.addEventListener('click', handleFormSubmit)

// button flow
function cartButtonFlow() {
    addHidden(list), 
    addHidden(cartButton), 
    removeHidden(cartDiv)
};

function backButtonFlow() {
    removeHidden(list), 
    removeHidden(cartButton), 
    addHidden(cartDiv)
};

function createListFlow() {
    removeHidden(formContainer),
    addHidden(list), 
    addHidden(createListButton)
};

function cancelFlow() {
    addHidden(formContainer), removeHidden(list)
};
// 

function handleFormSubmit(e) {
    addHidden(formContainer)
    removeHidden(createListButton)
    removeHidden(list)
    e.preventDefault()
    ListingApi.createListing()

    formContainer.reset()
}


function clearElement(element){
    element.innerHTML = ""
}

function addHidden(element){
    element.classList.add("hidden")
}

function removeHidden(element){
    element.classList.remove("hidden")
}

