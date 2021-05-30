//массив продукции
var products = [
    {
        prod_name: '22" (55 см) Телевизор LED DEXP F22F7000K черный',
        prod_price: 100000
    },
    {
        prod_name: 'Ключ активации DOOM (1993) (Xbox ONE)',
        prod_price: 10000
    },
    {
        prod_name: 'Кабель Samsung USB Type-C - USB Type C черный 1 м',
        prod_price: 1000
    },
    {
        prod_name: '27" Монитор LG 27QN600-B [27QN600-B.ARUZ]',
        prod_price: 100
    },
    {
        prod_name: '2 ТБ Внешний HDD WD Elements Portable [WDBU6Y0020BBK]',
        prod_price: 10
    },
]
//отрисовка раздела продукции
function prod_render() {
    var prodDiv = document.getElementById('prod');
    prodDiv.style.borderColor = 'black';
    prodDiv.style.borderStyle = 'solid';
    prodDiv.style.maxHeight = '550px';
    prodDiv.style.maxWidth = '550px';
    prodDiv.style.minHeight = '50px';
    prodDiv.style.minWidth = '100px';
    prodDiv.style.marginTop = '50px';
    prodDiv.style.position = 'absolute'
    prodDiv.style.left = '1100px'
    prodDiv.style.color = 'cyan';
    prodDiv.style.justifyContent = 'center'
    prodDiv.style.display = 'flex';
    prodDiv.style.flexWrap = 'wrap';
    prodDiv.style.backgroundColor = 'grey';
    const newEl = document.createElement('div');
    newEl.textContent = 'Продукция: ';
    prodDiv.appendChild(newEl);
    prodDiv.style.justifyContent = 'center';

}

window.onload = prod_render();
//отрисовка карточек
function render(num) {
    var card = document.createElement("div");
    card.className = 'card';
    card.id = 'card' + num
    prod.append(card);
    card.style.borderColor = 'black';
    card.style.borderStyle = 'solid';
    card.style.margin = '0px';
    card.style.padding = '0px';
    card.style.display = 'flex';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';
}
//заполнение карточек данными из массива
for (let n = 0; n < products.length; n++) {
    window.onload = render(n);
    let target = document.getElementById('card' + n);
    target.insertAdjacentHTML('afterbegin', products[n].prod_name + '<br>' + products[n].prod_price)

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

