//массив продукции ]]]
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
    prodDiv.style.maxWidth = '1px';
    prodDiv.style.marginTop = '50px';
    prodDiv.style.position = 'absolute'
    prodDiv.style.left = '1100px'
    prodDiv.style.display = 'flex';
    prodDiv.style.flexWrap = 'wrap';
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
    card.style.borderColor = 'black';
    card.style.borderStyle = 'solid';
    card.style.minWidth = '450px';
    card.style.minHeight = '70px';
    card.style.margin = '0px';
    card.style.padding = '0px';
    card.style.display = 'flex';
    card.style.color = 'white';
    card.style.alignItems = 'center';
    card.style.backgroundColor = 'green';
    card.style.justifyContent = 'space-between';
    //добавление кнопки
    button.className = 'button';
    button.id = 'button' + num;
    button.style.display = 'flex';
    button.style.borderColor = 'black';
    button.style.borderStyle = 'solid';
    button.style.alignItems = 'center'
    button.style.minWidth = '70px';
    button.style.minHeight = '100%';
    button.style.backgroundColor = '#8a8a66';
    if (products[num].in_basket == false){
        button.insertAdjacentHTML('afterbegin', `В корзину`);
    }
    else{
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

let a = new Product('test1', 121);
a.pushToArray();

