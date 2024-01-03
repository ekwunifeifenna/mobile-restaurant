import menuArray from './data.js'

const menuContainer = document.getElementById("menu-container")
const orderSection = document.getElementById("order-section") //checkout
const modalContainer = document.getElementById("modal-container")
const customerName = document.getElementById("customerName")
const formElement = document.getElementById("form-el")
const orderDetails = document.getElementById("order-details")


let orderArray = []

function newTotalPrice() {
    return orderArray.reduce((accumulator, currentElement)=> {
        accumulator + currentElement.price
    }, 0)
}


// render function for when the plus button is pressed

document.addEventListener("click", function(e){

    if(/\d/.test(e.target.id)){
        handleAddClick(e.target.id)
    }

    if(e.target.dataset.remove){
        handleRemoveClick(e.target.dataset.remove)
    }

    if (e.target.id == 'purchase-button'){
        handlePurchaseClick(e.target.id)
    }

    if(e.target === modalContainer){
        modalContainer.style.display = 'none'
    }

})

function getMenu() {
    let menuList = ``

    menuArray.forEach(menu => {
        menuList += `
        <div class="order-full">
                    <span class = "item-graphic">${menu.emoji}</span>
                    <span class="item-details">
                        <h4>${menu.name}</h4>
                        <p>${menu.ingredients.join(", ")}</p>
                        <h5>$${menu.price}</h5>

                    </span>
                    <button class="add-btn" id="${menu.id}">+</button>
                    </div>
                    
        `
    })
    return menuList
}

function renderMenu() {
    menuContainer.innerHTML = getMenu()
}




//The list of order items that the user selects
function getOrders() {
    let ordersList = ``
    menuArray.forEach(menu => {
        ordersList += `
        <div class= "orderItem">
            <span class="itemAddedByUser">
            <h4>${menu.name}</h4>
            <button class="remove-btn" data-remove="${menu.id}">remove</button>
            </span>
            <h5>${menu.price}</h5>
        </div>
        `
    })
    return ordersList

}

function renderOrderTotal() {
    orderSection.innerHTML = `
    <h4>Your Order</h4>
    <div>${getOrders()}</div>
    <hr>
    <div class="totalSection">
        <h4>Total Price</h4>
        <h5>$${newTotalPrice()}</h5>
    </div>

    <button class="purchase-button">Complete Order</button>
    `

    orderDetails.style.display = "none"
    orderSection.style.display = "block"
}



function handleAddClick(menuId){
    const target = menuArray.filter((menu) => {
        return menu.id === menuId
})[0]
orderArray.push(target)
renderOrderTotal()
newTotalPrice()
}

function handleRemoveClick(menuId) {
    const index = orderArray.indexOf(orderArray.filter((order) => {
        return order.id === menuId
})[0])

if(index > -1) {
    orderArray.splice(index, 1)
}
renderOrderTotal()

}

function handlePurchaseClick(buttonId) {
    if(orderArray.length){
        modalContainer.style.display = 'flex'
    }
}

function renderOrderDetails() {
    modalContainer.style.display = "none"
    orderSection.style.display = "none"

    orderDetails.innerHTML = `
    Thanks, ${customerName.value} Your Order is on its way
    `

    orderDetails.style.display = "block"
    orderArray = []
}

formElement.addEventListener("submit",(e)=>{
    e.preventDefault()
    renderOrderDetails()
    formElement.reset()

})

renderMenu()
renderOrderTotal()
