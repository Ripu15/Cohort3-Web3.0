function asciiToUint8Array(asciiString) {
    //[...] :Spread operator Converts the string asciiString into an array of individual characters.

    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
  // Example usage:
  const ascii = "Hello";
  const byteArray = asciiToUint8Array(ascii);
  console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
  