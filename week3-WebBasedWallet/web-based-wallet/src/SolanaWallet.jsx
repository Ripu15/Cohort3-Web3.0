import { useState } from "react"
//mnemonicToSeed: Converts a BIP39 mnemonic phrase to a cryptographic seed.
import { mnemonicToSeed } from "bip39";
//derivePath: Uses the ED25519 derivation path to get a seed for a specific wallet account.
import { derivePath } from "ed25519-hd-key";
//Keypair: Solana class for generating public/private key pairs.
import { Keypair } from "@solana/web3.js";
//nacl: Library for low-level cryptography — used to create keypairs from a seed.
import nacl from "tweetnacl"

//'SolanaWallet' function receives a mnemonic as a prop.
export function SolanaWallet({ mnemonic }) {
    //It represents the wallet index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    // mnemonic → root seed (like the master key to a vault)
    // path → which drawer in the vault you're opening  
    // derivedSeed → the actual key inside that drawer
    return <div>
        <button onClick={function() {
            //Convert mnemonic to seed
            const seed = mnemonicToSeed(mnemonic);
            //Create a derivation path:
            const path = `m/44'/501'/${currentIndex}'/0'`;
            //Derive seed for the path
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            //Create keypair from the derived seed
            //secret contains both the private and public key in a single 64-byte buffer.
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);

            setCurrentIndex(currentIndex + 1);
            setPublicKeys([...publicKeys, keypair.publicKey]);
        }}>
            Add Solana wallet
        </button>

        {/* Render the Wallets */}
        {/* Loops through each public key and shows it in Base58 (Solana standard format) */}
        {publicKeys.map(p => <div>
            Sol - {p.toBase58()}
        </div>)}
    </div>
}