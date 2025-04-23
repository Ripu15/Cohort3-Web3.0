function arrayToHex(byteArray) {
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
      //.toString(16) method converts the byte to a hexadecimal string
        //.padStart(2, '0') ensures that if the resulting hex string 
        //is less than 2 characters (e.g., "a"), it pads it with a 
        //leading '0' (resulting in "0a").
      hexString += byteArray[i].toString(16).padStart(2, '0');
      
    }
    return hexString;
  }
  
  // Example usage:
  const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const hexString = arrayToHex(byteArray);
  console.log(hexString); // Output: "48656c6c6f"
  