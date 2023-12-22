const extendHex = (shortHex) => {
  // write your code here
	
  // Remove # symbol if it exists
  if (shortHex.startsWith('#')) {
    shortHex = shortHex.slice(1);
  }

  // Expand short hex to full hex format
  let fullHex = '#';
  for (let i = 0; i < shortHex.length; i++) {
    // Repeat each character to form the full hex code
    fullHex += shortHex[i] + shortHex[i];
  }

  return fullHex;


};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
