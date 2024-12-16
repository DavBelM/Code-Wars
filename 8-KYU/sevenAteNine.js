function sevenAte9(str) {
    let ar = str.toString().split('')
    for(i = 1; i < ar.length; i++)
      {
        if(ar[i] === '9' && ar[i-1] === '7' && ar[i+1] === '7')
        
        {
            ar.splice(i, 1)
            i--
        } 
        }
      
      return ar.join('')
  }
  console.log(sevenAte9(7912312))
  
  