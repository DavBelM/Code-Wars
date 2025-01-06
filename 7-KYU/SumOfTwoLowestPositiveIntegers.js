function sumTwoSmallestNumbers(numbers) {  
    
    let arr = numbers.sort((a, b) => a - b).slice(0, 2)
    return arr.reduce((sum, num) => sum + num, 0)
  }
  
  console.log(sumTwoSmallestNumbers([4, 5, 7, 9, 3, 2]))