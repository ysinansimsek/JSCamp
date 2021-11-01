function addToCart(quantity, productName = "Default Value") {
console.log(quantity + "  adet "   + productName + "  Sepete Eklendi!")
}
addToCart(addToCart("Ürün")) //output :  Ürün  adet Default Value  Sepete Eklendi! -- undefined  adet Default Value  Sepete Eklendi!
addToCart(15 ,"Ürün 1") //output :  15  adet Ürün 1  Sepete Eklendi!
addToCart() //output :  undefined  adet Default Value  Sepete Eklendi!
addToCart(50) //output :  50  adet Default Value  Sepete Eklendi! 

let sayHello =  ()  => {
    console.log("Hello World!")
}

sayHello()  //output :  Hello World!

let sayHello2 = function() {
    console.log("Hello World 2 !")
}

sayHello2() //output :  Hello World 2 !

function addToCart2(productName , quantity , unitPrice) {
    
}

addToCart2("Ürün1" , 10 , 5)
addToCart2("Ürün2" , 5 , 2)
addToCart2("Ürün2" , 12 , 8)


function addToCart3(product) {

    console.log("Ürün Adı : " + product.prodcutName , "Ürün Adeti : " + product.quantity , "Birim Fiyatı : " + product.unitPrice )
}
 let product1 = {prodcutName : "Ürün 1" , quantity : 5 , unitPrice : 10}
 let product2 = {prodcutName : "Ürün 2" , quantity : 20 , unitPrice : 20}
 let product3 = {prodcutName : "Ürün 3" , quantity : 30 , unitPrice : 30}


 addToCart3(product1) //output :  Ürün Adı : Ürün 1 Ürün Adeti : 5 Birim Fiyatı : 10
 addToCart3(product2) // output : Ürün Adı : Ürün 2 Ürün Adeti : 20 Birim Fiyatı : 20

product2 = product3
product2.prodcutName = "Ürün 2"
console.log(product3.prodcutName) //output :  Ürün 2

let num1  = 10
let num2  = 20
num1 = num2
num2 = 100
console.log(num1) // output : 20

 function addToCart4(products) {
     console.log(products)
 }
 let products = [
     product1,product2,product3
 ]

 addToCart4(products) // (3) [{…}, {…}, {…}]0: prodcutName: "Ürün 1"quantity: 5unitPrice: 10[[Prototype]]: Object1: prodcutName: "Ürün 2"quantity: 30unitPrice: 30[[Prototype]]: Object2: prodcutName: "Ürün 2"quantity: 30unitPrice: 30[[Prototype]]: Objectlength: 3[[Prototype]]: Array(0)

 function add1(num1 , num2) {
     console.log(num1 + " + " +  num2 + " = " + num1 + num2)
     
 }

 add1(5,25) // 5 + 25 = 525

 function add(...numbers) { // Rest operator başka parametre varsa başa yaz
     let total = 0
     for (let index = 0; index < numbers.length; index++) {
          total = total + numbers[index]           
     }
     console.log(total)

 }
 add(20,30) // 50 
 add(10,20,30) // 60
 add(20,30,40,50) // 140
console.log(Math.max(10,20,30,500,40)) // output : 500

let numbers = [30,10,500,600,120]
console.log(Math.max(numbers)) // NaN
console.log(Math.max(...numbers)) // 600 spread parçalar , rest birleştirir.

let regions = ["İç Anadolu" , "Marmara" , "Karadeniz" , "Doğu Anadolu" , "Ege" , "Akdeniz"]
console.log(regions[0]) // İç Anadolu


let [value1 , value2 , value3] = ["İç Anadolu" , "Marmara" , "Karadeniz" , "Doğu Anadolu" , "Ege" , "Akdeniz"]
console.log(value1) // İç Anadolu
console.log(value2) // Marmara

let [value4 , value5] = [
    {name:"İç Anadolu" , population:"20M"},
    {name:"Marmara" , population:"30M"},
    {name:"Karadeniz" , population:"10M"}


]
console.log(value4.name + " ----- " + value5.population) // İç Anadolu ----- 30M

let [icAnadolu , marmara , karadeniz , [icAnadoluSehirleri]] = [
    {name:"İç Anadolu" , population:"20M"},
    {name:"Marmara" , population:"30M"},
    {name:"Karadeniz" , population:"10M"},
[    
    ["Ankara", "Konya" , "Eskişehir"],
    ["İstanbul", "İzmit" , "Bursa"],
    ["Samsun", "Trabzon" , "Ordu"]
]
]
console.log(icAnadoluSehirleri) // (3) ['Ankara', 'Konya', 'Eskişehir']

let newProductName , newUnitPrice , newQuantity
({productName:newProductName , unitPrice:newUnitPrice , quantity : newQuantity  }
    = {productName:"Ürün 1" , unitPrice:10 , quantity:5}
)

console.log(newProductName) // Ürün 1
console.log(newUnitPrice) // 10
console.log(newQuantity) // 5