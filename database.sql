
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- table for boardgames.
CREATE TABLE "boardgame" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (200) NOT NULL,
"link" VARCHAR (1000),
"picture" VARCHAR (1000),
"player" TEXT
);
-- table for events.
CREATE TABLE "events" (
"id" SERIAL PRIMARY KEY,
"host_id" INTEGER,
"game_name" VARCHAR (200) NOT NULL,
"date_time" timestamp with time zone
);
-- table for the events a specific user is attending.
CREATE TABLE "user_events" (
"user_id" int references "user"(id) ON DELETE CASCADE ON UPDATE CASCADE, 
"event_id" int references events(id) ON DELETE CASCADE ON UPDATE CASCADE,
constraint id PRIMARY KEY (user_id, event_id)
);
