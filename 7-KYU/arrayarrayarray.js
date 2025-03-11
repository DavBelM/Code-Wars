function explode(x){
   
    
    const nums = x.filter(n => typeof n === 'number');
    
     let score = nums.length === 2 ? 
            nums[0] + nums[1] : 
            nums.length === 1 ? 
            nums[0] : 'Void!';

    if (score === 'Void!') return score;
        
    return Array(score).fill(x);

        
    
       
       
}
console.log(explode(['a', 3]))