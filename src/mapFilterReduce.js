let cart = [
    {id:1 , productName:"Ürün1" , quantity:5 , unitPrice:2000},
    {id:2 , productName:"Ürün2" , quantity:2 , unitPrice:2500},
    {id:3 , productName:"Ürün3" , quantity:3 , unitPrice:100},
    {id:4 , productName:"Ürün4" , quantity:4 , unitPrice:500},
    {id:5 , productName:"Ürün5" , quantity:1 , unitPrice:9000},
    {id:6 , productName:"Ürün6" , quantity:7 , unitPrice:12000},
]
console.log("<ul>")
cart.map(product => {//product : nesne dizisi gezilirken o anki nesneyi temsil eder.
console.log("<li>" + product.productName + " : " 
+ product.unitPrice * product.quantity + "<li>")
})  
console.log("</ul>")

let total = cart.reduce((acc,product) => acc + product.unitPrice,0)
console.log(total)

let quantityOver2 = cart.filter(product => product.quantity>5)
console.log(quantityOver2)
function addToCart(sepet) {
    sepet.push({id:7 , productName:"Ürün7" , quantity:7 , unitPrice:7000})
}
addToCart(cart)
console.log(cart)

let sayi = 10
function sayiTopla(number) {
    number += 1
    console.log(number) //11
}
sayiTopla(sayi)
console.log(sayi)//10