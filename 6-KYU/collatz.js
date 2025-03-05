//colatz sequence
function collatz(n) {
    let arr = []
    
    while(n !== 1)
    {
        arr.push(n)
        n = n % 2 === 0 ? n / 2 : n * 3 + 1
    }
    arr.push(1)
    return arr.join("->")
}
console.log(collatz(10))