import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const tests = pgTable('tests', {
  id: serial('id').primaryKey(),
  email: text('email'),
});
