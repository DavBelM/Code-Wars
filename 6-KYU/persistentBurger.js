function persistence(num) {
    let count = 0;
    
    while(num >= 10)
    {
        num = num
                 .toString()
                 .split("")
                 .reduce((product, digit) => product = product * Number(digit), 1);
        count++
    }
    return count
    }
    console.log(persistence(999))