function comp(array1, array2){
    if (!array1 || !array2) return false;
    if (array1.length !== array2.length) return false; 
    
    let squared = array1.map(num => num * num).sort((a, b) => a - b);
    
    let sortedB = array2.sort((a, b) => a - b);
    
    return squared.every((num, index) => num === sortedB[index]);
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11]  
,[121, 14641, 20736, 361, 25921, 361, 20736, 361]))