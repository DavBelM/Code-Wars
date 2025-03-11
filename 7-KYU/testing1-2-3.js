const number = (array) => {
    let count = 1;
    let withNums = array.map((char) => (`${count++}: ${char}`))
    return withNums;
}
console.log(number(['a', 'b', 'c'])) // ["1: a", "2: b", "3: c"]