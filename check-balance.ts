import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
 
//public adress of toly.sol 
const publicKey = new PublicKey("to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK");
 
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
 
const balanceInLamports = await connection.getBalance(publicKey);
 
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

if (PublicKey.isOnCurve(publicKey)) {
    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
      );
  } else {
    console.log('Address is invalid');
  }
 
