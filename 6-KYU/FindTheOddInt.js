
function findOdd(A) {
    let map = {}
    
        for(let num of A)
        {
            map[num] = (map[num] || 0) + 1 
        }
        for(let key in map)
        {
            if(map[key] % 2 !== 0)
            {
                return Number(key)
            }
        }
    }
    console.log(findOdd([4,2,5,7,2]))