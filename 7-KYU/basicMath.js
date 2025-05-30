function calculate(str) {
    
    let numbers = str.match(/\d+/g).map(Number);
    
    let operations = str.match(/[a-z]+/g);
    console.log(`Operations: ${operations}`)
    
    let result = numbers[0];
    
    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];
        let nextNumber = numbers[i + 1];
        
        switch (operation) {
            case 'plus':
                result += nextNumber;
                break;
            case 'minus':
                result -= nextNumber;
                break;
            case 'times':
                result *= nextNumber;
                break;
            case 'dividedby':
                result /= nextNumber;
                break;
        }
    }
    
    return result.toString(); // Convert to string before returning
}

console.log(calculate("2minus1plus1")); 
console.log(calculate("1plus2plus3plus4")); 
console.log(calculate("3times4"));

