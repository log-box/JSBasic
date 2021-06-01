//массив продукции
var products = [
    {
        prod_name: '22" (55 см) Телевизор LED DEXP F22F7000K черный',
        prod_price: 100000,
        in_basket: false
    },
    {
        prod_name: 'Ключ активации DOOM (1993) (Xbox ONE)',
        prod_price: 10000,
        in_basket: false
    },
    {
        prod_name: 'Кабель Samsung USB Type-C - USB Type C черный 1 м',
        prod_price: 1000,
        in_basket: false
    },
    {
        prod_name: '27" Монитор LG 27QN600-B [27QN600-B.ARUZ]',
        prod_price: 100,
        in_basket: false
    },
    {
        prod_name: '2 ТБ Внешний HDD WD Elements Portable [WDBU6Y0020BBK]',
        prod_price: 10,
        in_basket: true
    },
]
//отрисовка раздела продукции
function prod_render() {
    var prodDiv = document.getElementById('prod');
    let textDiv = document.createElement('div');
    prodDiv.appendChild(textDiv);
    textDiv.insertAdjacentHTML('afterbegin', `ПРОДУКЦИЯ: `);
}

window.onload = prod_render();
//отрисовка карточек
function render(num) {
    var card = document.createElement("div");
    let button = document.createElement("div");
    prod.appendChild(card);
    card.appendChild(button);
    card.className = 'card';
    card.id = 'card' + num;
    button.className = 'button';
    button.id = 'button' + num;
    if (products[num].in_basket == false) {
        button.insertAdjacentHTML('afterbegin', `В корзину`);
    }
    else {
        button.insertAdjacentHTML('afterbegin', `В корзине`)
        button.style.backgroundColor = '#a88989';
    }
}
//
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

// let a = new Product('test1', 121);
// a.pushToArray();

