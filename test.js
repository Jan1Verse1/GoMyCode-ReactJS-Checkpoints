const pounds = [11, 21, 16]
const avg = pounds.reduce((total, amount, index, array) => {
 total += amount
 if (index === array.length - 1) {
   return total / array.length
 } else {
   return total
 }
}, 0)
console.log(avg)
