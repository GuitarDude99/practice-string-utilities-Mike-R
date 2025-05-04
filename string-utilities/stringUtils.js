//Objectives:

/* Create the stringUtils.js Module:

Define and export the following functions:

capitalize(str): Converts the first letter of a string to
uppercase.

reverse(str): Reverses the characters in a string.

contains(str, substr): Checks if a substring exists within a
string and returns true or false. 
*/


//Capitalize

 function caps(str) {
   if (typeof str !== "string" || str.length === 0) {
      console.log("invalid input");
      return "invalid input";
 }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
 


//Reverse

 function reverse(str) {
   if (typeof str !== "string" || str.length === 0) {
      console.log("invalid input");
      return "invalid input";
 }
    return str.split('').reverse().join("");
}



//Check for substring in string, return true or false

 function contains(str, substr) {
    if (!str.includes(substr)) {
      return console.log("substring not found")  
    }
    return str.includes(substr)
}


// Export

module.exports = {caps, reverse, contains };
