function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(n => typeof n === 'number' && n % 1 === 0)
  }