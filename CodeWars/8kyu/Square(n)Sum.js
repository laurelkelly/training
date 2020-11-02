// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// input: numbers
// output: number

// algorithm:
//[x] keep track of the sum
//[x] look at the numbers
//[x] square each number
//[x] return the sum of the new numbers

// while loop
function squareSum(numbers){
    let sum = 0,
      i = numbers.length;
    while (i--) 
      sum += Math.pow(numbers[i], 2);
    return sum;
}

// for loop
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 2);
    }
    return sum;
}

// forEach loop
function squareSum(numbers) {
    let sum = 0;
    numbers.forEach(function(n) {
        sum += n*n;
    });
    return sum;
}

// reduce method
function squareSum(numbers) {
    return numbers.reduce(function(sum, n) {
        return sum + (n*n);
    }, 0)
}