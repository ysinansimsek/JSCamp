function isPerfectNumber(number) {
    let total = 0
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            total += i
        }
    }
    if(total === number ) {
        console.log(number + " Mükemmel Bir Sayıdır")
    }
}
for (let i = 1; i < 1000; i++) {
isPerfectNumber(i)    
}