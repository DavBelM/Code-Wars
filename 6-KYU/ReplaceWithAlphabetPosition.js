
function alphabetPosition(text) {
    let arr2 = []
    for (let char of text.toLowerCase())
    {
        if (char >= "a" && char <= "z")
        {
            arr2.push(char.charCodeAt(0) - "a".charCodeAt(0) + 1)
        }
        
    }
    return arr2.join(" ")
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))