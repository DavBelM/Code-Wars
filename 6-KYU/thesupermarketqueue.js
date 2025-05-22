function queueTime(customers, n) {

    if (customers.length === 0) return 0;

    if (n === 1) return customers.reduce((sum, time) => sum + time, 0)

   const tills = new Array(n).fill(0);
   customers.forEach(customerTime => {
    const minTillIndex = tills.indexOf(Math.min(...tills))
    tills[minTillIndex] += customerTime;
   });
   
   return Math.max(...tills)
  }
console.log(queueTime([2, 3, 10], 2))