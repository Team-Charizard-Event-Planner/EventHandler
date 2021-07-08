CREATE TABLE "users" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "username" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "email" varchar NOT NULL
);
CREATE TABLE "items" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "item_name" varchar NOT NULL,
  "event_id" integer NOT NULL,
  "user_id" integer,
  "cost" numeric
);
CREATE TABLE "events" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "title" varchar NOT NULL,
  "date" date NOT NULL,
  "description" varchar,
  "creator_id" integer NOT NULL
);
CREATE TABLE "attendees" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "event_id" integer NOT NULL,
  "user_id" integer NOT NULL,
  "isHost" boolean NOT NULL
);
CREATE TABLE "sessions" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "user_id" integer NOT NULL,
  "token" varchar UNIQUE NOT NULL,
  "expiration" date NOT NULL
);

-- i would say no need to add the foreign keys at this juncture until we have some data in the database
-- note that foreign keys don't autopopulate
ALTER TABLE "items" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("_id");
ALTER TABLE "items" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("_id");
ALTER TABLE "events" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("_id");
ALTER TABLE "attendees" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("_id");
ALTER TABLE "attendees" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("_id");
ALTER TABLE "sessions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("_id");