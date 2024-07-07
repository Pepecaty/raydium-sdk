// src/index.ts
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { RaydiumSDK } from '@raydium-io/raydium-sdk-v2';

export class MyRaydiumWrapper {
  private raydiumSdk: RaydiumSDK;
  private connection: Connection;
  constructor(connection: Connection) {
    this.connection = connection;
    this.raydiumSdk = new RaydiumSDK(connection);
  }

  // ... Add your wrapper functions here ...
  async getPoolInfo(poolAddress: PublicKey) {
    return await this.raydiumSdk.amm.getPoolInfo(poolAddress);
  } 
}
