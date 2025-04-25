import { useState } from "react";
import { mnemonicToSeed } from "bip39";
// HDNodeWallet & Wallet: From ethers.js, used to derive wallets
// from seed/private key.
import { Wallet, HDNodeWallet } from "ethers";

//Receives a mnemonic as a prop
export const EthWallet = ({mnemonic}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);

    return (
        <div>
            <button onClick={async function() {
                //Convert mnemonic to seed
                //seed is a 64-byte buffer that acts as the master seed for wallet derivation
                const seed = await mnemonicToSeed(mnemonic);
                //This is a standard Ethereum HD path
                const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                //HDNodeWallet.fromSeed(seed): Create an HD wallet node from the seed.
                //The hdNode is the master wallet from which all child wallets will be derived.
                 const hdNode = HDNodeWallet.fromSeed(seed);
                 //.derivePath(...): Derive a child wallet at the given path.
                 //child is a new wallet derived using that path.
                 const child = hdNode.derivePath(derivationPath);
                 //Grab the private key from the child node.
                 //privateKey is the raw key you can store, sign with, or import.
                 const privateKey = child.privateKey;
                 //Create an actual ethers.Wallet instance with it.
                 const wallet = new Wallet(privateKey);
                 setCurrentIndex(currentIndex + 1);
                setAddresses([...addresses, wallet.address]);
            }}>
                Add ETH wallet
            </button>

            {addresses.map(p => <div>
                Eth - {p}
            </div>)}
        </div>
    )
}