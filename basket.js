"use strict";
var basket = {
    items: [
        // { 
        //     prod_name: 'Телевизор Samsung', 
        //     prod_price: 1000,
        //     in_basket: true
        // },
        // { 
        //     prod_name: 'Монитор ASUS', 
        //     prod_price: 2000,
        //     in_basket: true 
        // },
        // { 
        //     prod_name: 'iPhone20', 
        //     prod_price: 3000,
        //     in_basket: true 
        // },
        // { 
        //     prod_name: 'XBOX Seriex XXL', 
        //     prod_price: 4000,
        //     in_basket: true 
        // },
        // { 
        //     prod_name: 'Sony PlayStation 6', 
        //     prod_price: 5000,
        //     in_basket: true 
        // },
    ],
    count() {
        let _sum = 0;
        this.items.forEach(item => {
            _sum += item.prod_price
        })
        return (`В корзине: ${basket.items.length} товаров на сумму ${_sum} рублей <br>`);
    }
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

window.onload = basket_create();
