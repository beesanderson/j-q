var saying = 'Home sweet home ';

// Length: returns number of characters in the string in most cases -
saying.length;
console.log(saying.length) // returns 16

// toUpperCase(): Changes string to uppercase letters - 
saying.toUpperCase();
console.log(saying.toUpperCase()); // returns HOME SWEET HOME

// toLowerCase(): Changes string to lowercase characters - 
saying.toLowerCase();
console.log(saying.toLowerCase()); // returns home sweet home

// charAt(): takes an index number as a parameter, and returns the character found at that position -
saying.charAt(12); 
console.log(saying.charAt(12)); // returns o 

// indexOf(): Returns index number of the first time a character or a set of characters is found within the string -
saying.indexOf('ee');
console.log(saying.indexOf('ee')); //returns 7 

// lastIndexOf(): returns index number of the last tme a character or set of characters is found within the string - 
saying.lastIndexOf('e');
console.log(saying.lastIndexOf('e')); // returns 14

// substring(): returns characters found between two index numbers where the character for the first index number is included and the character for the last index number is not included - 
saying.substring(8,14);
console.log(saying.substring(8,14)); // returns et hom

// split(): when a character is specified, it splits the string each time it is found, then stores each individual part in an array - 
saying.split(' ');
console.log(saying.split(' ')); // returns ['Home', 'sweet', 'home', '']

// trim(): removes whitespace from start to end of string - 
saying.trim();
console.log(saying.trim()); // returns 'Home sweet home'

// replace(): like find and replace, it takes one value that should be found, and another to replace it (by default, it only replaces the first match it finds)
saying.replace('me','w');
console.log(saying.replace('me','w')); // returns 'How sweet home '