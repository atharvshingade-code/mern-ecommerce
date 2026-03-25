
import dotenv from "dotenv";

dotenv.config();

import Redis from "ioredis";

export const redis = process.env.UPSTASH_REDIS_URL
  ? new Redis(process.env.UPSTASH_REDIS_URL)
  : {
      get: async () => null,
      set: async () => null,
      del: async () => null,
    };