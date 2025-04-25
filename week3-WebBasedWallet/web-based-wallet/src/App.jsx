import { useState } from 'react'
import './App.css'

import { generateMnemonic } from 'bip39';
import { SolanaWallet } from './SolanaWallet';
import {  EthWallet } from './EthWallet'

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <input type="text" value={mnemonic}></input>
      <button onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn)
        }}>
          Create Seed Phrase
      </button>
      
    {/* Only render the wallet if the user has a mnemonic available. */}
      {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
      {mnemonic && <EthWallet mnemonic={mnemonic} />}

    </>
  )
}

export default App
