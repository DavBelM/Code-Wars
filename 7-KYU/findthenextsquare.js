function findNextSquare(sq) {
    if(Math.sqrt(sq) % 1 === 0)
    {
        let curr = Math.sqrt(sq)
        let next = (curr + 1) * (curr + 1) 
        return next
    }
    else
    {
        return -1
    }
}
console.log(findNextSquare(4))