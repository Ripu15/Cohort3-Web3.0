function asciiToBytes(asciiString) {
  //array declaration to store byte array
    const byteArray = [];
    for (let i = 0; i < asciiString.length; i++) {
        //charCodeAt:This method is used to get the Unicode code point (or character code) of a character at a specified position in a string
      byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
  }
  
  // Example usage:
  const ascii = "Hello";
  const byteArray = asciiToBytes(ascii);
  console.log(byteArray); // Output: [72, 101, 108, 108, 111]