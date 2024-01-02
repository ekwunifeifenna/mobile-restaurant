import menuArray from './data.js'

const menuContainer = document.getElementById("menu-container")
const orderSection = document.getElementById("order-section")


function getOrderList() {
    const menuList = menuArray.map((menu)=>{
        return`
                    <div class="order-full">
                    <h1>${menu.emoji}</h1>
                    <div class="order-details">
                        <h3>${menu.name}</h3>
                        <p class= menuIngredient>${menu.ingredients}</p>
                        <p class=menuPrice>$${menu.price}</p>

                    </div>
                    <i class="fa-solid fa-plus"></i>
                    </div>
                    <hr />
                    
                    `
                    

    }).join("")
    menuContainer.innerHTML += menuList


    let orderTotal =  `
            <div class="entireOrderSection">
                <div class="pizzaOrder">
                    <p class="orderName">OrderName</p>
                    <p class="orderPrice">Order Price</p>
                    <i class="fa-solid fa-minus"></i>
                </div>
    

                <div class="burgerOrder">
                    <p class="orderName">OrderName</p>
                    <p class="orderPrice">Order Price</p>
                    <i class="fa-solid fa-minus"></i>
                </div>
    

                <div class="beerOrder">
                    <p class="orderName">OrderName</p>
                    <p class="orderPrice">Order Price</p>
                    <i class="fa-solid fa-minus"></i>
                </div>
    
            </div>
            <div class="totalSection" id="totalSection">
                <hr />

                <div class="orderTotal">
                    <p>Total Price: </p>
                    <p>Order Price</p>
                </div>
    
            </div>

            <div class="completeOrder">
                <button type="button">COMPLETE ORDER</button>
            </div> 
            `
    orderSection.innerHTML = orderTotal 
}

function renderOrderList() {
    getOrderList()
}

renderOrderList()


