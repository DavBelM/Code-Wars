function differences(word1, word2)
{
    let differ = [];
    let wordslength = Math.max(word1.length, word2.length);
    for (let i = 0; i < wordslength; i++)
    {
        let char1 = word1[i].toLowerCase();
        let char2 = word2[i].toLowerCase();
        if((char1 >= "a" && char2 >= "a") && (char1 <= "z" && char2 <= "z") )
        {
            let differrence = Math.abs(char1.charCodeAt(0) - char2.charCodeAt(0));
            differ.push(differrence)
        }
                 
                    
            
            
        
    }
    return differ.join(" ")
}
console.log(differences("yabc", "zdef"))