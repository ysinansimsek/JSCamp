function findPrime(...numbers) {
    
        for (let i = 0; i < numbers.length; i++) {
            let isPrime = 0
            if(numbers[i]===1 || numbers[i]===2 ){
                console.log(numbers[i] + " Sayısı Asaldır")
                
            }
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i]%j===0) {
              isPrime++
            } 
      
            if(isPrime>0) {
                console.log(numbers[i] + " Sayısı Asal Değildir.")
               break
            } else {
                console.log(numbers[i] + " Sayısı Asaldır.")
                break
            }         
        }
  
    }
}

findPrime(1,3,5,7,8)
findPrime(2,4,6,8,13)
findPrime(21,23,24,27)



