function digitalRoot(n) {
    while(n >= 10)
    {
        let sum = 0;
        let digit = n.toString();
        for (let i = 0; i < digit.length; i++)
        {
            sum += Number(digit[i])
        }
        n = sum
    }

  return n;
}
console.log(digitalRoot(1993))