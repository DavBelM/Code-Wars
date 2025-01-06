function lovefunc(flower1, flower2){

    let love = (flower1 + flower2) % 2 === 0 ? false : true
    return love
  
  }
  console.log(lovefunc(3, 2))