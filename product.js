var Product = [
    '22" (55 см) Телевизор LED DEXP F22F7000K черный',
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
        Product.forEach(function(item) {
            prodDiv.insertAdjacentHTML('beforeend', item + ' <br> ');
        });
    }
    window.onload = render();
}
window.onload = prod_render();
