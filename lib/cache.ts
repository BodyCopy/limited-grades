import {
  createClient,
  RedisClientType,
  RedisModules,
  RedisScripts,
} from "redis";

type RedisClient = RedisClientType<RedisModules, RedisScripts>;

export const IS_ENABLED = process.env.REDIS_URL !== undefined;
let REDIS_CLIENT: RedisClient | null;

const initializeRedisClient = async (): Promise<void> => {
  if (!IS_ENABLED) {
    throw new Error("Cannot connect to cache when it is not enabled");
  }

  if (!REDIS_CLIENT) {
    REDIS_CLIENT = createClient({
      url: process.env.REDIS_URL,
      socket: {
        tls: true,
        rejectUnauthorized: false,
        reconnectStrategy: (retries) => Math.min(retries * 1000, 10000),
      },
    });

    REDIS_CLIENT.on("error", (error) =>
      console.log("Redis Client Error:", error)
    );

    await REDIS_CLIENT.connect();
  }
};

export class RedisCacheClient {
  static async get(key: string) {
    await initializeRedisClient();
    return await REDIS_CLIENT!.get(key);
  }

  static async set(key: string, value: string, expirationInHours: number) {
    await initializeRedisClient();
    return await REDIS_CLIENT!.set(key, value, {
      EX: expirationInHours * 60 * 60,
    });
  }
}
