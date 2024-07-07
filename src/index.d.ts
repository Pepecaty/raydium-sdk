// src/index.d.ts
import { Connection, PublicKey } from '@solana/web3.js';

export class MyRaydiumWrapper {
  constructor(connection: Connection);
  getPoolInfo(poolAddress: PublicKey): Promise<any>; // Replace 'any' with the correct type
  // ... other methods 
}
