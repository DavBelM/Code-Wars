function findDeletedNumber(arr, mixArr) {

    let st1 = new Set(arr)
    let st2 = new Set(mixArr)
    
    for(let num of st1)
    {
        if(!st2.has(num))
        {
            return num;
        }
    }
    return 0;
        
    }
    console.log(findDeletedNumber([1,2,3,4,5], [2,3,4,1]))