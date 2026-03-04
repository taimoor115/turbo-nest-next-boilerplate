import { Module, Logger } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { DATABASE_CONNECTION } from './database.contants';

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (configService: ConfigService) => {
        const logger = new Logger('DatabaseModule');

        const pool = new Pool({
          connectionString: configService.getOrThrow('DATABASE_URL'),
        });

        pool.on('connect', () => {
          logger.log('✔ Database Connected Successfully');
        });

        pool.on('error', (err) => {
          logger.error('❌ Database Connection Error', err.stack);
        });

        return drizzle(pool, {
          schema: {},
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
