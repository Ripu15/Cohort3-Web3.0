function hexToArray(hexString) {
    //because each byte in hexadecimal is represented by two characters
    const byteArray = new Uint8Array(hexString.length / 2);
    
    for (let i = 0; i < byteArray.length; i++) {
      //parseInt- converts hex to decimal
      //Extracts two characters from the hexString, starting at position i * 2
      byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
  }
  
  // Example usage:
  const hex = "48656c6c6f";
  const byteArrayFromHex = hexToArray(hex);
  console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
  