const changePass = (pass) => {
  const arr = changeToArray(pass)
  let output = "";
  for (const x of arr) {
    if (x === 'a') {
      output += '4';
    } else if (x === 'e') {
      output += '3';
    } else if (x === 'o') {
      output += '0';
    } else if (x === 'l') {
      output += '1';
    } else {
      output += x;
    }
  }
  return output;
};

const changeToArray = (pword) => {
  if (pword.length > 1) {
    return "Only enter one password at a time into obfuscator.";
  }
  return pword[0].split('');
};

const input = process.argv.slice(2);
console.log(changePass(input));