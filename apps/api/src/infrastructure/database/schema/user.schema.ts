import { pgTable, timestamp, uuid, varchar, pgEnum } from 'drizzle-orm/pg-core';

export const userRoleEnum = pgEnum('user_role', ['admin', 'user']);

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),

  google_id: varchar('google_id', { length: 255 }).unique(),

  email: varchar('email', { length: 255 }).unique(),

  role: userRoleEnum('role').default('user'),

  name: varchar('name', { length: 255 }),

  profile_image: varchar('profile_image', { length: 1024 }),

  access_token: varchar('access_token', { length: 2048 }),

  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});
