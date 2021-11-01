function addToCart(quantity, productName = "Default Value") {
console.log(quantity + "  adet "   + productName + "  Sepete Eklendi!")
}
addToCart(addToCart("Ürün")) // Ürün  adet Default Value  Sepete Eklendi! -- undefined  adet Default Value  Sepete Eklendi!
addToCart(15 ,"Ürün 1") // 15  adet Ürün 1  Sepete Eklendi!
addToCart() // undefined  adet Default Value  Sepete Eklendi!
addToCart(50) // 50  adet Default Value  Sepete Eklendi! 

let sayHello =  ()  => {
    console.log("Hello World!")
}

sayHello()  // Hello World!

let sayHello2 = function() {
    console.log("Hello World 2 !")
}

sayHello2() // Hello World 2 !
