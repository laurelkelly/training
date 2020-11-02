// 10/26/2020
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  // input: array
  // output: number
  
  // algo
  //[x] look at the array
  //[x] keep a count of the sheep
  //[x] return the count
  
  let sheepCount = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sheepCount++;
    }
  }
  console.log(sheepCount);
  return sheepCount;
} 

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log(countSheeps(array1));

// REFACTOR

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}