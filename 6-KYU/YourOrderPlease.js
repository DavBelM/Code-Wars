function  order(words) {

    let wor = words.trim().split(/\s+/)
    let withnums = wor.map((word) => [word, Number(word.match(/\d/)?.[0])])
    withnums.sort((a, b) => a[1] - b[1])
    
    let result = withnums.map(justword => justword[0]).join(" ")
  
    return result
  }
  console.log(order('is2 Thi1s T4est 3a'))