function hello(name) {  
  
    if(!name || name.trim() === "")
      {
        name = 'World'
      }
    else
      {
         name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      }
    return `Hello, ${name}!`
  }
  
  console.log(hello('mItaLi'))