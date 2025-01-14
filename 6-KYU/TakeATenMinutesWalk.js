function isValidWalk(walk) {
    let y = 0 , x = 0
walk.forEach(where => {
y += where === 'n' ? 1 : where === 's' ? -1 : 0;
x += where === 'e' ? 1 : where === 'w' ? -1 : 0;
/*
 switch (where) {
    case 'n': y++; break;
    case 's': y--; break;
    case 'e': x++; break;
    case 'w': x--; break;
  }
*/
}

)

return walk.length === 10 && y === 0 && x === 0
}