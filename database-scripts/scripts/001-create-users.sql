CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR NOT NULL,
  "password" TEXT NOT NULL,
  "birthday" TIMESTAMP NOT NULL
);
