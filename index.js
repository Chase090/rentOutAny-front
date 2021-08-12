const list = document.querySelector('#items-list')
const listDic = document.querySelector('#Listings')
const searchBar = document.querySelector('.search')
const createListButton = document.querySelector('#create-list-form-button')


function clearElement(element){
    element.innerHTML = ""
}

function addHidden(element){
    element.classList.add("hidden")
}

function removeHidden(element){
    element.classList.remove("hidden")
}
