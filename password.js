const passObf = (pword) => {
  if (pword.length > 1) {
    return "Only enter one password at a time into obfuscator.";
  }
  let array = pword[0].split('');
  let output = "";
  for (const num of array) {
    if (num === 'a') {
      output += '4';
    } else if (num === 'e') {
      output += '3';
    } else if (num === 'o') {
      output += '0';
    } else if (num === 'l') {
      output += '1';
    } else {
      output += num;
    }
  }
  return output;
};

const input = process.argv.slice(2);

console.log(passObf(input));

// Make password.js take in a single string as a command line argument and
// print out an obfuscated version of that password, using the rules defined below.

// Our program should define a function named obfuscate.
// This function should take a string as an argument and obfuscate it by applying the following rules:

// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

// Are these obfuscated passwords any good?

// Not really! To truly minimize the risk of our accounts being hacked, we should use long
// passwords and use unique ones for every account.

// Password management software such as 1Password, Lastpass or KeePass can be a big help!

// Tips
// Remember to tackle the problem in pieces. Define a solution first, then implement it one piece at a time.
// The obfuscate function should not read directly from process.argv. Another piece of code outside that function can perform that task.
// It's important to understand why this is considered better practice.
// If you're unclear about the reasoning, ask your other peers or a mentor!
// The solution should use a loop to go through the characters one at a time.
// Do not use any built-in functions like String.prototype.replace that do all the work of scanning through the string for you.