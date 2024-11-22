function pipeFix(numbers){
    
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)
  let fixed = [];
  for (let i = min; i <= max; i++)
  {
      fixed.push(i)
  }
      return fixed;
  
  }
  pipeFix([1,3,5,6,7,8])