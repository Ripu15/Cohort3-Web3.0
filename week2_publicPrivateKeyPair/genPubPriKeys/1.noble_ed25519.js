//Setting "type": "module" in your package.json file tells Node.js 
//to treat all .js files in your project as ES modules instead of CommonJS modules

/*
importing all exported functions and variables from
 @noble/ed25519 library and assigning them to the namespace 'ed'

 @noble/ed25519 library is a JavaScript library for Ed25519.
 It is widely used for signing and verifying messages in 
 cryptographic applications (e.g., blockchains, secure messaging, etc.)
*/
import * as ed from "@noble/ed25519";


async function main() {
  // Generates a secure random private key
  //ed.utils.randomPrivateKey(): This method generates a random
  // 32-byte private key, typically represented as a Uint8Array in Ed25519
  const privKey = ed.utils.randomPrivateKey();
  console.log("Private key: \n");
  console.log(privKey);

  // converts the string "hello world" 
  //into a Uint8Array using the TextEncoder API,
  const message = new TextEncoder().encode("hello");
  console.log("Message: \n");
  console.log(message);

  //Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);
  console.log("Public key: \n");
  console.log(pubKey);

  // Sign the message
  const signature = await ed.signAsync(message, privKey);
  console.log("Signed Msg: \n");
  console.log(signature);

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  // Output the result
  console.log("Verify the signed msg: \n");
  console.log(isValid); // Should print `true` if the signature is valid
}

main();

