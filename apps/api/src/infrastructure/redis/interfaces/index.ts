export interface RedisModuleOptions {
  host: string;
  port: number;
  password?: string;
  db?: number;
}

export interface RedisModuleAsyncOptions {
  imports?: any[];
  inject?: any[];
  useFactory: (
    ...args: any[]
  ) => Promise<RedisModuleOptions> | RedisModuleOptions;
}
