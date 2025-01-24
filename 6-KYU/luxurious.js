function luxhouse(houses) {
    const n = houses.length;
    const result = [];
    let maxRight = 0;

   
    for (let i = n - 1; i >= 0; i--) {
        if (houses[i] > maxRight) {
            result.push(0);
        } else {
            result.push(maxRight + 1 - houses[i]); 
        }
        maxRight = Math.max(maxRight, houses[i]); 
    }

    return result.reverse();
}

console.log(luxhouse([1, 2, 3, 1, 2])); 
