// 64 characters: A-Z, a-z, 0-9, +, /	
// 58 characters: 1-9, A-H, J-N, P-Z, a-k, m-z
// o,0,I,l, +,/(not included in base58 encoding)

const bs58 = require('bs58');
console.log(bs58);

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String); // Output: Base58 encoded string
