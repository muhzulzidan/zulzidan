import "server-only";

import { neon } from "@neondatabase/serverless";

let database;

export function getDatabase() {
  if (database) return database;

  const connectionString =
    process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL or POSTGRES_URL must be configured.");
  }

  database = neon(connectionString);
  return database;
}
