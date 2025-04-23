
//A better way to represent an array of bytes is to use a UInt8Array in JS
//They use less space. Every number takes 64 bits (8 bytes).
// But every value in a UInt8Array takes  8 bits or 1 byte.
let bytes = new Uint8Array([0, 255, 127, 128]);
let bytesBig = new Uint8Array([0, 356, 127, 128]);
console.log(bytes);
console.log(bytesBig);

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;

console.log(uint8Arr);