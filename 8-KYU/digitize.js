function digitize(n) {

    let arr = n.toString().split("").reverse().map(Number)
    return arr
    
}
console.log(digitize(46423))