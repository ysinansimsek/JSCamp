function findPrime(number) {
    
    for (let i = 1; i < number; i++) {
        let isPrime = 0
        if(i===1 || i===2 ){
            console.log(i)
        }
    for (let j = 2; j <i; j++) {
        if (i%j===0 && i!==j) {
          isPrime++
        } 
        if(isPrime===0) {
            console.log(i)
            break
        }
    }
}
}

findPrime(1000) // Gönderdiğin sayıya kadar olan asal sayıları bulur



