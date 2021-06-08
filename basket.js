"use strict";
var basket = {
    items: [],
    count() {
        let _sum = 0;
        this.items.forEach(item => {
            _sum += item.prod_price
        })
        return (`В корзине: ${basket.items.length} товаров на сумму ${_sum} рублей <br>`);
    }
}
// let basket = [];

// Ф-я конструктор 'элемента корзины
function Task(prod_name, prod_price, in_basket = true, prod_id) {
    this.prod_name = prod_name;
    this.prod_price = prod_price;
    this.in_basket = in_basket;
    this.prod_id = prod_id;
}

// Отрисовка элементов корзины
function drawBasket() {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';
    basket.forEach(function (task, i) {
        drawTask(task, i, $taskList);
    })

    console.log(taskList)
}


//функция создания элемента корзины на экране. Ее вызываем после внесения изменений в корзину из раздела product.js
function basket_create() {
    var basketDiv = document.getElementById("basket");
    basketDiv.innerHTML = '';
    if (basket.items.length == 0) {
        basketDiv.insertAdjacentHTML('afterbegin', '<p>Корзина пуста</p>')
    }
    else {
        basketDiv.insertAdjacentHTML('afterbegin', basket.count())
    }
    for (let n = 0; n < basket.items.length; n++) {
        basketDiv.insertAdjacentHTML('beforeend', `${n + 1}: ${basket.items[n].prod_name}, стоимость - ${basket.items[n].prod_price} руб.<br>`)
    }
}

// window.onload = basket_create();
