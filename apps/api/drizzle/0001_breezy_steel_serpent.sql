CREATE TABLE "tests" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text
);
--> statement-breakpoint
DROP TABLE "users" CASCADE;