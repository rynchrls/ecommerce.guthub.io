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

let productContent = document.getElementById('product-content');


let GenerateShop = () => {
    return (productContent.innerHTML = shopItemPants.map((x) => {
    let {id, img , title, price} = x;
    return `
        <div class="product-card" >
            <img src="${img}" alt="" class="card-img">
            <h5 class="title2">${title}</h5>
            <div class="price">$${price}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);" class="add-cart" id="${id}"><path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path></svg>
        </div>`
}).join(""))


}

GenerateShop();

let featuredContent = document.getElementById('featured-content');

let GenerateShop2 = () => {
    return (featuredContent.innerHTML = featuredProductPants.map((y) => {
    let {id, img , title, price} = y;
    return `
            <div class="featured-card">
                <img src="${img}" alt="" class="card-img">
                <h5 class="title2">${title}</h5>
                <div class="price">$${price}</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);" class="add-cart"><path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path></svg>
            </div>`
}).join(""))
}

GenerateShop2();

let addcart = document.getElementsByClassName('add-cart');
for (let i = 0; i < addcart.length; i++) {
    const addJucart = addcart[i];
    addJucart.addEventListener('click', increment2)
    
}
function increment2(event) {
    let selectedItem =  event.target;
    let Parent = selectedItem.parentElement.parentElement;
    let title = Parent.getElementsByClassName('title2')[0].innerText
    let img = Parent.getElementsByClassName("card-img")[0].src;
    let price = Parent.getElementsByClassName("price")[0].innerText;
    console.log(title, img, price)

    if(basket.some((x) => x.title === title)) {
        alert("you already have this on your cart")
        return;
    }

    basket.push({
        item: 1,
        title: title,
        img: img,
        price: price
    })
    localStorage.setItem("data", JSON.stringify(basket))
    calculation();
}

let increment = (id) => {
    let selectedID = id.id;

    let create = id.parentElement;
    let title = create.getElementsByClassName('title2')[0].innerText
    let img = create.getElementsByClassName("card-img")[0].src;
    let price = create.getElementsByClassName("price")[0].innerText

    if(basket.some((x) => x.title === title)) {
        alert("you already have this on your cart")
        return;
    }

    basket.push({
        id: selectedID,
        item: 1,
        title: title,
        img: img,
        price: price
    })
    localStorage.setItem("data", JSON.stringify(basket))
}

let calculation = () => {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    let calcu = document.getElementById('total')
    calcu.innerText = basket.map((x) => x.item).reduce((x,y) => x+y, 0)
}

calculation();


const search = () => {
    let searchbox = document.getElementById('search-item').value.toUpperCase();
    let storeitems = document.getElementById('product-content')
    let product = document.querySelectorAll('.product-card')
    let pname = storeitems.getElementsByTagName('h5')

    for (let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h5')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
        
    }
}




let loginForm = document.querySelector('.login');
let loginForm2 = document.querySelector('.login2');
let logform = document.querySelector('.login-form');
let form = document.querySelector('.form');
let ex = document.querySelector('.ex-btn');
loginForm.onclick = () => {
    logform.classList.add('login-form-active')
    form.classList.add('active-form')
}
ex.onclick = () => {
    logform.classList.remove('login-form-active')
    form.classList.remove('active-form')
}

loginForm2.onclick = () => {
    logform.classList.add('login-form-active')
    form.classList.add('active-form')
}






{/* <input type="date" class="Date">
<div class="typeofTag">P</div>
<div class="typeofList">
    <div class="box"></div>
    <h4>Personal</h4>
</div> */}