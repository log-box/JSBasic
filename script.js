////////////////////////////////////////1///////////////////////////////////////
function getDigits(num){
    let result = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0
    }
    if (Math.floor(num/1000) != 0)  {
        console.log('Введеное число превышает 999\nВводите число от 0 до 999')
        return result
    }
    else{
        result.единицы = num % 10;
        num = Math.floor(num/10);
        result.десятки = num % 10, 
        num = Math.floor(num/10);
        result.сотни = num % 10, 
        num = Math.floor(num/10);
        return(result)
    }
}

console.log(getDigits(245))
console.log(getDigits(1000))

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////2-3/////////////////////////////////////
//Реализовал объект product, который добавляю в корзину, после объявления объекта корзины (backet)
var product = {
    prod_name: 'Some name',
    price: 100000
}

var backet = {
    goods1: 40000,
    goods2: 10500,
    goods3: 50526,
    discount: 1,
    countBasketPrice: function() {
        let sum = 0; 
        for (let item in backet){
            if (item != 'countBasketPrice' && item != 'discount'){
               
                sum += backet[item]
            }
            if (item == 'discount'){
                sum *= backet[item]
            }
        }
        return(sum.toFixed(2))
    }
}
backet[product.prod_name] = product.price
console.log(backet.countBasketPrice())
////////////////////////////////////////////////////////////////////////////////