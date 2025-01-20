function findMissing(list) {  
    
    let d1 = list[1] - list[0]
    let d2 = list[2] - list[1]
    d = d1 === d2 ? d1 : Math.min(d1, d2)

        for(i = 0; i <= list.length - 1; i++)
        {
            if(list[i] + d !== list[i + 1])
                return list[i] + d
            
            
        }

        
        
  }
  console.log(findMissing([1, 3, 4]))