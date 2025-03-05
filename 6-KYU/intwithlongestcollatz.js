function collatzLength(n) {
    let length = 1; // Include the starting number
    while (n !== 1) {
      n = n % 2 === 0 ? n / 2 : 3 * n + 1;
      length++;
    }
    return length;
  }


  function longestCollatz (arr)
  {
    return arr.reduce((maxnum, num) => 
        collatzLength(num) > collatzLength(maxnum) ? num : maxnum
    )
  }

  console.log(longestCollatz([4, 3, 7, 9]))