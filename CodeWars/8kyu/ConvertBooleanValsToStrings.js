// 10/21/2020
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// input: boolean
// output: string

// algo
//[x] look at the boolean 
//[x] check to see if it's true
//[x] if true, return 'Yes'
//[x] otherwise, return 'No'

function boolToWord( bool ){
    if (bool === true) {
      return "Yes";
    } else {
        return "No";
      }
  }

// REFACTOR

function boolToWord( bool ) {
    return bool ? 'Yes' : 'No';
}