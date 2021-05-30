var basket = {
    items: [
        { title: 'goods1', price: 1000 },
        { title: 'goods2', price: 2000 },
        { title: 'goods3', price: 3000 },
        { title: 'goods4', price: 4000 },
        { title: 'goods5', price: 5000 },
    ],
    count() {
        let _sum = 0;
        this.items.forEach(item => {
            _sum += item.price
        })
        return ('В корзине: ' + basket.items.length + ' товаров на сумму ' + _sum + ' рублей');
    }
}

function basket_create() {
    var basketDiv = document.getElementById("basket");
    basketDiv.style.borderColor = 'black';
    basketDiv.style.borderStyle = 'solid';
    basketDiv.style.maxHeight = '550px';
    basketDiv.style.maxWidth = '550px';
    basketDiv.style.minHeight = '50px';
    basketDiv.style.minWidth = '100px';
    basketDiv.style.marginTop = '50px';
    // basketDiv.style.margin = 'auto';
    basketDiv.style.position = 'absolute'
    basketDiv.style.left = '650px'
    basketDiv.style.color = 'cyan';
    basketDiv.style.justifyContent = 'center'
    // basketDiv.style.marginBottom = '50px';
    // basketDiv.style.marginTop = '50px';
    basketDiv.style.display = 'flex';
    basketDiv.style.flexWrap = 'wrap';
    // board.style.paddingRight = '50px';
    // board.style.paddingTop = '50px';
    basketDiv.style.backgroundColor = 'grey';
    if (basket.items.length == 0) {
        basketDiv.insertAdjacentHTML('beforeend', '<p>Корзина пуста</p>')
    }
    else {
        basketDiv.insertAdjacentHTML('beforeend', basket.count())
    }
}


window.onload = basket_create();
// alert(basket.count())