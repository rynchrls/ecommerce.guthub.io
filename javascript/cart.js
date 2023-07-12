let sideMenu = document.querySelector('.menu-bar');
let sidish = document.querySelector('.sidish');
let body = document.querySelector('.main');
let header = document.querySelector('.search-log-cart');

sideMenu.onclick = () => {
    if(sidish.classList.contains('active')) {
        sidish.classList.remove('active')
    }
    else
     {
        sidish.classList.add('active')
    }
}


header.onclick = () => {
    sidish.classList.remove('active');
}
let activePage = window.location.pathname;
let nav = document.querySelectorAll('.nav a')
.forEach(links => {
    if(links.href.includes(`${activePage}`)) {
        let indicate = links.parentElement.parentElement
        indicate.classList.add('activate')
    }
});
let nav2 = document.querySelectorAll('.nav2 a')
.forEach(links => {
    if(links.href.includes(`${activePage}`)) {
        let indicate = links.parentElement.parentElement
        indicate.classList.add('activate')
    }
});



let table = document.getElementById('table')

let basket = JSON.parse(localStorage.getItem("data")) || [];


let generateCartItems = () => {

    table.innerHTML = basket.map((x) => {
        let { img, title, price} = x
        return (`<tr class="cart-per-product">
                    <td class="titulo">${title}</td>
                    <td class="img-space"><img src="${img}" alt="" class="cart-img"></td>
                    <td><div class="price">${price}</div></td>
                    <td><input type="number" value="1" class="cart-quantity"></td>
                    <td><svg onclick="removeItem(event)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style="fill: var(--font-color)" class="remove-btn"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg></td>
                </tr>`)
    }).join("")
}

generateCartItems();

let calculation = () => {
    let calcu = document.getElementById('total')
    let productCart = document.getElementsByClassName('cart-per-product')
    calcu.innerText = productCart.length
}

calculation();




 let removeItem = (event) => {
    let btn = event.target
    let selected = btn.parentElement.parentElement.parentElement;
    console.log(selected)
    let select = btn.parentElement.parentElement.parentElement.remove();
    let titled = selected.getElementsByClassName('titulo')[0].innerText;
    basket = basket.filter((x) => x.title !== titled)
    localStorage.setItem("data", JSON.stringify(basket))
    updateQuantity();
    updateTotal();
    calculation();
 }


let updateQuantity = () => {
    var Quantity = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < Quantity.length; i++) {
        const quantityValue = Quantity[i];
        quantityValue.addEventListener('change', quantityChange)
        
    }
    }
    
function quantityChange(event) {
    let input = event.target;
    if(input.value <= 0){
        input.value = 1;
    }
    updateTotal()
}
    

function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-container')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-per-product')
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseInt(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        // if price contains cents 
        total = Math.round(total * 100) / 100; 
        document.getElementsByClassName('cart-total')[0].innerText = 'TOTAL: $' + total;
}

updateQuantity();
updateTotal()


let checkout = document.querySelector('.checkout')
checkout.addEventListener('click', Payment)

function Payment() {
    if(table.hasChildNodes()) {
        alert('payment successful!')
        table.removeChild(table.firstChild)

    }else {
        alert('PLEASE ADD ITEM FIRST!!')
    }
    updateTotal()
    calculation();
    localStorage.clear()
}