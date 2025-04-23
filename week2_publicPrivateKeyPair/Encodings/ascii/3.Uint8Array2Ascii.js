function Uint8ArrayToAscii(byteArray) {
  /*
    TextDecoder is part of the Encoding API in JavaScript. It decodes 
    'a stream of bytes' into a 'string' using a specific character encoding 
    (default is UTF-8).
    .decode(byteArray): decodes 'byteArray' into a string

  */
    return new TextDecoder().decode(byteArray);
  }
  
  // Example usage:
  const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const asciiString = Uint8ArrayToAscii(bytes);
  console.log(asciiString); // Output: "Hello"