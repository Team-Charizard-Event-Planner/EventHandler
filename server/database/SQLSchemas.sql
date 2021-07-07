CREATE TABLE "users" (
  "_id" smallserial PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "username" varchar,
  "password" varchar,
  "email" varchar
);
CREATE TABLE "items" (
  "_id" smallserial PRIMARY KEY,
  "item_name" varchar,
  "event_id" integer,
  "user_id" integer,
  "cost" numeric
);
CREATE TABLE "events" (
  "_id" smallserial PRIMARY KEY,
  "title" varchar,
  "date" date,
  "description" varchar,
  "creator_id" integer
);
CREATE TABLE "attendees" (
  "_id" smallserial PRIMARY KEY,
  "event_id" integer,
  "user_id" integer,
  "isHost" boolean
);
-- i would say no need to add the foreign keys at this juncture until we have some data in the database
-- note that foreign keys don't autopopulate
ALTER TABLE "items" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("_id");
ALTER TABLE "items" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("_id");
ALTER TABLE "events" ADD FOREIGN KEY ("creator_id") REFERENCES "users" ("_id");
ALTER TABLE "attendees" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("_id");
ALTER TABLE "attendees" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("_id");