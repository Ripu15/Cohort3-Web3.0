//1 character = 6 bits
//Base64 encoding uses 64 different characters (A-Z, a-z, 0-9, +, /),
//'uint8Array' is 5*8 = 40 bits
//40/6 = ciel(6.66) = 7 ,but result has 8 chars , 8th one is '=' is
//added to make it multiple of 4

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
//In Node.js, a Buffer is a global object used to work with binary data
//.toString("base64"):Encodes the Buffer data into a Base64 string.
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);//SGVsbG8=