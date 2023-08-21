import type { Config } from "drizzle-kit";
import 'dotenv/config';

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_URL!,
    authToken: process.env.DB_TOKEN!,
  },
  verbose: true,
  strict: true,
} satisfies Config;

