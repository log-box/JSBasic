"use strict";
//массив продукции
var products = [
    {
        prod_name: '22" (55 см) Телевизор LED DEXP F22F7000K черный',
        prod_price: 100000,
        in_basket: false,
        prod_id: 1
    },
    {
        prod_name: 'Ключ активации DOOM (1993) (Xbox ONE)',
        prod_price: 10000,
        in_basket: false,
        prod_id: 2
    },
    {
        prod_name: 'Кабель Samsung USB Type-C - USB Type C черный 1 м',
        prod_price: 1000,
        in_basket: false,
        prod_id: 3
    },
    {
        prod_name: '27" Монитор LG 27QN600-B [27QN600-B.ARUZ]',
        prod_price: 100,
        in_basket: false,
        prod_id: 4
    },
    {
        prod_name: '2 ТБ Внешний HDD WD Elements Portable [WDBU6Y0020BBK]',
        prod_price: 10,
        in_basket: false,
        prod_id: 5
    },
]

//отрисовка раздела продукции
function prod_render() {
    let prodDiv = document.getElementById('prod');
    let textDiv = document.createElement('div');
    prodDiv.appendChild(textDiv);
    textDiv.insertAdjacentHTML('afterbegin', `ПРОДУКЦИЯ: `);
}
window.onload = prod_render();

//отрисовка карточек
function render(num) {
    let card = document.createElement("div");
    let button = document.createElement("div");
    let small_img = document.createElement('div');
    card.appendChild(small_img);
    prod.appendChild(card);
    card.appendChild(button);
    card.className = 'card';
    card.id = 'card' + num;
    button.className = 'button';
    button.id = 'button' + num;
    small_img.className = 'small_img';
    small_img.id = 'small_img' + num;
    small_img.style.backgroundImage = 'url(img/small/' + num + '.png)';
    small_img.style.backgroundSize = '100%';
    let button_target = document.querySelector('#button' + num);
    button_target.addEventListener('click', clickHandler);
    small_img.addEventListener('click', clickImageHandler);
    if (products[num].in_basket == false) {
        button.insertAdjacentHTML('afterbegin', `В корзину`);
    }
    else {
        button.insertAdjacentHTML('afterbegin', `В корзине`)
        button.style.backgroundColor = '#a88989';
    }
}

//заполнение карточек данными из массива
for (let n = 0; n < products.length; n++) {
    window.onload = render(n);
    let target = document.getElementById('card' + n);
    target.insertAdjacentHTML('afterbegin', `${products[n].prod_name} <br> Стоимость -  ${products[n].prod_price} руб.`)
};

//Функция создания продукции с методом добаления в массив
function Product(name, price, array = products) {
    this.name = name;
    this.price = price;
    this._array = array;

    this.pushToArray = function () {
        return this._array.push({
            prod_name: this.name,
            prod_price: this.price
        })
    }
}

//Функция обработки нажатия на кнопку
function clickHandler(e) {
    if (products[e.target.id[(e.target.id.length) - 1]].in_basket == true) {
        for (let n = 0; n < basket.items.length; n++) {
            if (basket.items[n].prod_id === products[e.target.id[(e.target.id.length) - 1]].prod_id) {
                basket.items.splice(n, 1);
            }
        }
        products[e.target.id[(e.target.id.length) - 1]].in_basket = false;
        e.target.firstChild.data = 'В корзину';
        e.target.style.backgroundColor = '#8a8a66';
        basket_create();
    }
    else {
        basket.items.push(products[e.target.id[(e.target.id.length) - 1]]);
        products[e.target.id[(e.target.id.length) - 1]].in_basket = true;
        e.target.firstChild.data = 'В корзине';
        e.target.style.backgroundColor = '#a88989';
        basket_create();
    }
    console.log();
}
let triger = 0;

//функция нажатия на маленькое изображение
function clickImageHandler(e) {
    
    if (triger != e.target.id) {
        bigImg.style.backgroundImage = 'url(img/big/' + (e.target.id[9]) + '-2.png)';
        bigImg.style.visibility = 'visible';
        triger = e.target.id;
    }
    else {
        bigImg.style.visibility = 'hidden'
        triger = 0;
    }
}

//функция обработки кликов по большой картинке. Подход примитивный, просто меняем конец строки URL
function clickBigImageHandler(e){
    let imgUrl = bigImg.style.backgroundImage;
    console.log(imgUrl);
    if (imgUrl != imgUrl.replace('-1.png','-2.png')){
        imgUrl = imgUrl.replace('-1.png','-2.png')
        bigImg.style.backgroundImage = imgUrl;
    }
    else if (imgUrl != imgUrl.replace('-2.png','-3.png')){
        imgUrl = imgUrl.replace('-2.png','-3.png')
        bigImg.style.backgroundImage = imgUrl;
    }
    else if (imgUrl != imgUrl.replace('-3.png','-1.png')){
        imgUrl = imgUrl.replace('-3.png','-1.png')
        bigImg.style.backgroundImage = imgUrl;
    }

}
//берем DIV с большой картинкой и присваиваем его к обработчику событий для большой картинки
let bigImg = document.getElementById('big_img');
bigImg.addEventListener('click', clickBigImageHandler);



