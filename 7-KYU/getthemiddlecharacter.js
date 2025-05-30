function getMiddle(s) {
    const len = s.length / 2
    if(s.length % 2 === 0) {
        return s[len-1] + s[len]

    }    
    else
    {
        return s[Math.floor(len)]
    }
}

console.log(getMiddle('A'))
