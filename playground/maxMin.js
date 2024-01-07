function minimumAndMaximumIterate(numbers) {
  
    if(!numbers.length) return numbers;
    
    let smallest = Number.MAX_VALUE;
    let largest = Number.MIN_VALUE;
    
    for(let i=0; i<numbers.length; i++) {
        console.log(`IN LOOP: numbers{i} is ${numbers[i]}`)
      if(Number(numbers[i]) < smallest) {
        console.log(`comparing numbers[i]: ${numbers[i]} to smallest: ${smallest}`)
        smallest = numbers[i]
      }
      
      if(Number(numbers[i]) > largest) {
        console.log(`comparing numbers[i]: ${numbers[i]} to largest: ${largest}`)
        largest = numbers[i]
      }

      console.log(`End of loop: smallest is ${smallest} and largest is ${largest}`)
    }
    
    return[smallest, largest]
    
  }

  console.log(minimumAndMaximumIterate([-9, -1]))