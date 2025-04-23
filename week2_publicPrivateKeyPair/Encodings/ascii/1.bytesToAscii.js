//bytes to ascii function
function bytesToAscii(byteArray) {
    //fromCharCode-converts Unicode values(integers) to characters
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }
  
  // Example usage:
  const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString); // Output: "Hello"