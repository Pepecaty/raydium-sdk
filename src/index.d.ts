import { Connection, PublicKey } from '@solana/web3.js';
import { RaydiumSDK } from '@raydium-io/raydium-sdk-v2';

export class MyRaydiumWrapper {
  constructor(connection: Connection);
  getPoolInfo(poolAddress: PublicKey): Promise<PoolInfo>; 
}

interface PoolInfo {
  tokenA: {
    mint: PublicKey; 
    symbol: string; 
    decimals: number;
  };
  tokenB: {
    mint: PublicKey; 
    symbol: string;  
    decimals: number; 
  };
  liquidity: BN;   

}
