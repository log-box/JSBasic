var basket = {
    items: [
        {title: 'goods1', price: 1000},
        {title: 'goods2', price: 2000},
        {title: 'goods3', price: 3000},
        {title: 'goods4', price: 4000},
        {title: 'goods5', price: 5000},
    ],
    count(){
        this.items.forEach(item => {
            alert(item.price)
        })
    }
}

basket.count();