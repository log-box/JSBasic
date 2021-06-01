var basket = {
    items: [
        { title: 'Телевизор Samsung', price: 1000 },
        { title: 'Монитор ASUS', price: 2000 },
        { title: 'iPhone20', price: 3000 },
        { title: 'XBOX Seriex XXL', price: 4000 },
        { title: 'Sony PlayStation 6', price: 5000 },
    ],
    count() {
        let _sum = 0;
        this.items.forEach(item => {
            _sum += item.price
        })
        return (`В корзине: ${basket.items.length} товаров на сумму ${_sum} рублей <br>`);
    }
}

function basket_create() {
    var basketDiv = document.getElementById("basket");
    if (basket.items.length == 0) {
        basketDiv.insertAdjacentHTML('afterbegin', '<p>Корзина пуста</p>')
    }
    else {
        basketDiv.insertAdjacentHTML('afterbegin', basket.count())
    }
    for (let n = 0; n < basket.items.length; n++) {
        basketDiv.insertAdjacentHTML('beforeend', `${n + 1}: ${basket.items[n].title}, стоимость - ${basket.items[n].price} руб.<br>`)
    }
}

window.onload = basket_create();
