const $main = document.querySelector('main');
const $cart = document.querySelector('#cart');
const $popup = document.querySelector('#popup');
const $closePopupBtn = document.querySelector('#closePopupBtn');
const $nextSectionBtn = document.querySelector('#nextSectionBtn');
const $cartDetails = document.querySelector('#cart-details');

let currentCartSection = 1;

let goods = [];
let cart = [];


function getIDCounter(params) {
    let lastID = 1;

    return function () {
        return lastID++
    }
}

const idCounter = getIDCounter();
const cartIdCounter = getIDCounter();

function Good(title, price, img, desc) {
    this.id = idCounter();
    this.title = title;
    this.price = price;
    this.img = img;
    this.desc = desc;
}

function GoodCart({ title, price }) {
    this.id = cartIdCounter();
    this.title = title;
    this.price = price;
}

function drawMain() {
    for (let good of goods) {
        drawGoodCart(good);
    }
}

function drawGoodCart({ title, price, img, desc, id }) {
    const html = `<div class="good">
        <h2>${title}</h2>
        <img src="${img}">
        <p>${desc}</p>
        <p class="price">${price}р</p>
        <button data-id="${id}">В корзину</button>
    </div>`;

    $main.insertAdjacentHTML('beforeend', html);
}

function drawCartItem({ title, price, id }) {
    const html = `<div class="cartItem">
        <h2>${title}</h2>
        <p class="price">${price}р</p>
        <button data-id="${id}">Удалить</button>
    </div>`;

    $cartDetails.insertAdjacentHTML('beforeend', html);
}

function drawCart() {
    $cart.textContent = '';
    if(cart.length > 0) {
        $cart.insertAdjacentHTML('beforeend', `<p>В корзине ${cart.length} товаров на ${getCartPrice()} рублей`);
    } else {
        $cart.insertAdjacentHTML('beforeend', 'Корзина пуста');
    }

    $cartDetails.textContent = '';
    cart.forEach(function (good) {
        drawCartItem(good);
    })
}

function addToCart(id) {
    const good = goods.find(function (good) {
        return good.id === id;
    });

    cart.push(new GoodCart(good))
}

function removeFromCart(id) {
    const goodIndex = cart.findIndex(function (good) {
        return good.id === id;
    });
    cart.splice(goodIndex, 1);
}

function getCartPrice() {
    return cart.reduce(function (acc, good) {
      return acc + good.price;  
    }, 0)
}

function fetchGoods() {
    goods = [
        new Good('Телевизор', 1000, 'img/big/0-1.png', 'Описание товара "Телевизор"'),
        new Good('Игра Doom', 1200, 'img/big/1-2.png', 'Описание товара "Игра Doom"'),
        new Good('Кабель', 1100, 'img/big/2-3.png', 'Описание товара "Кабель usb"'),
        new Good('Монитор', 1800, 'img/big/3-1.png', 'Описание товара "монитор"'),
        new Good('Внешний диск', 1500, 'img/big/4-2.png', 'Описание товара "Диск hdd"'),
    ]
}

function showPopup() {
    $popup.style.display = 'flex'
}

function hidePopup() {
    $popup.style.display = 'none'
}

function nextSection() {
    document.querySelector('#section-' + currentCartSection).style.display = "none";
    currentCartSection = currentCartSection < 3 ? currentCartSection + 1 : 1;
    document.querySelector('#section-' + currentCartSection).style.display = "block";
}

$main.addEventListener('click', function (e) {
    addToCart(Number(e.target.getAttribute('data-id')));
    drawCart();
})

$cartDetails.addEventListener('click', function (e) {
    removeFromCart(Number(e.target.getAttribute('data-id')));
    drawCart();
})

$cart.addEventListener('click', showPopup);
$closePopupBtn.addEventListener('click', hidePopup);
$nextSectionBtn.addEventListener('click', nextSection);

fetchGoods();
drawMain();
drawCart();