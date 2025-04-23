//@solana/web3.js library is a JavaScript library for interacting
// with the Solana blockchain.
//Keypair class is used to generate and manage public-private key pairs in Solana.
import { Keypair } from "@solana/web3.js";
/*
tweetnacl is a popular cryptographic library in JavaScript that provides 
high-level cryptographic primitives like public-key signatures, 
public-key encryption, secret-key encryption, and message hashing */
//NaCl (Networking and Cryptography library)
import nacl from "tweetnacl";

// Generate a new keypair
const keypair = Keypair.generate();//'Keypair' is a static function

// Extract the public and private keys
const publicKey = keypair.publicKey.toString();
const secretKey = keypair.secretKey;

// Display the keys
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);

// Convert the message "hello world" to a Uint8Array
const message = new TextEncoder().encode("hello world");

//This function is used to generate a detached signature for a given message.
//A detached signature is a digital signature generated separately from the message
const signature = nacl.sign.detached(message, secretKey);

//This function verifies whether a given 'signature' matches  
// a 'message' using the provided 'public key'.
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes(),
);

console.log(result);
