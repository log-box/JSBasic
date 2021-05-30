var products = [
    {prod_name:'22" (55 см) Телевизор LED DEXP F22F7000K черный', prod_price: 100000},
    'Ключ активации DOOM (1993) (Xbox ONE)',
    'Кабель Samsung USB Type-C - USB Type C черный 1 м',
    '27" Монитор LG 27QN600-B [27QN600-B.ARUZ]',
    '2 ТБ Внешний HDD WD Elements Portable [WDBU6Y0020BBK]',
]

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
    prodDiv.style.left = '1000px'
    prodDiv.style.color = 'cyan';
    prodDiv.style.justifyContent = 'center'
    prodDiv.style.display = 'flex';
    prodDiv.style.flexWrap = 'wrap';
    prodDiv.style.backgroundColor = 'grey';
    const newEl = document.createElement('div');
    newEl.textContent = 'Продукция: ';
    prodDiv.appendChild(newEl);
    prodDiv.style.justifyContent = 'center';
    function render() {
        var card = document.createElement("div");
        card.className = 'card';
        prod.append(card);
        card.style.width = '44px';
        card.style.height = '44px';
        card.style.borderColor = 'black';
        card.style.borderStyle = 'solid';
        card.style.margin = '0px';
        card.style.padding = '0px';
        card.style.display = 'flex';
        card.style.justifyContent = 'center';
        card.style.alignItems = 'center';
        card.style.textEmphasisColor = 'white';
        card.style.color = 'white';
        // card.insertAdjacentHTML
        // Product.forEach(function(item) {
        //     prodDiv.insertAdjacentHTML('beforeend', item + ' <br> ');
        // });
    }
    window.onload = render();
}
window.onload = prod_render();

function Product(name, price, array=products) {
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

let a = Product('test1', 121);
a.pushToArray();