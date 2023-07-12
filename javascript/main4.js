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


let calculation = () => {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    let calcu = document.getElementById('total')
    calcu.innerText = basket.map((x) => x.item).reduce((x,y) => x+y, 0)
}

calculation();