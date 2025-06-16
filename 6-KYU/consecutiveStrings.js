function longestConsec(strarr, k) {
             const combined = []
    if (k > 0){
        for(i = 0; i <= strarr.length - k; i++)
        {
                combined.push(strarr.slice(i, i + k).join(''))
            

        }
                 https://obsidian-punch-eb2.notion.site/React-Theory-and-small-exercise-projects-13130bedbec881a089b2e1f061991aac
        let longest= '';
        combined.forEach((word) => {
        longest = longest.length > word.length ? longest : word
        })
        const r = combined.filter(word => word.length == longest.length)
        if(r.length > 1) {
        return r[0];
        }
        return r.join('')
    
   }
   else {
        return  combined.join('')
   }
}

console.log(
    longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], -3)
)
