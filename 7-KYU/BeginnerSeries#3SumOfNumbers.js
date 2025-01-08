// my solution
/*
function getSum(a, b)
{
  let sum = 0;
  if(a < b)
  {
      for(i = a; i <= b; i++)
  {
      sum += i;
  }
}
else if(a > b)
{
    for(i = b; i <= a; i++)
    {
        sum += i
    }
}
else
{
    return a;
}
  return sum;
}
console.log(getSum(1, 1))

*/

// best solution
/*
sum = n/2 * (first num + last num)
where n is the count of numbers in the range
n = (max - min + 1)
*/
function getSum(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    // Using the arithmetic sum formula: sum = (n/2) * (first + last)
    return ((max - min + 1) * (min + max)) / 2;
  }
  
/*
function getSum(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}
  */
