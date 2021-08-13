
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


cartButton.addEventListener('click', function(){addHidden(list), addHidden(cartButton), removeHidden(cartDiv)})

back.addEventListener('click', function(){removeHidden(list), removeHidden(cartButton), addHidden(cartDiv)})

createListButton.addEventListener('click', function(){removeHidden(formContainer),addHidden(list), addHidden(createListButton)} )

cancel.addEventListener('click', function(){addHidden(formContainer), removeHidden(list)})

submitInpt.addEventListener('click', handleFormSubmit)



function handleFormSubmit(e) {
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

