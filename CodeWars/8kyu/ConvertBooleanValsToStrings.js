// 10/21/2020 - Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// My solution

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