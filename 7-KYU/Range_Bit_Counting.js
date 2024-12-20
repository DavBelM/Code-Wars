function rangeBitCount(a, b) {
    let numarr = [];
    let binar = []
for (i = a; i <= b; i++)
{
    numarr.push(i)

}
let converted;
for (j = 0; j < numarr.length; j++)
{
     converted = numarr[j].toString(2)
     binar.push(converted)
}
let count = 0;
let str = binar.join("")
count = str.split('1').length - 1;

// for(let k  = 0; k < ar.length; k++)
// {
//     if (ar[k] === '1') count++
// }
 return  count
}
console.log(rangeBitCount(2, 7))