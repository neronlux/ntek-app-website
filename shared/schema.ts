import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

/**
 * Definition of the 'users' table in the database.
 * This table stores user credentials including a unique ID, username, and password.
 */
export const users = pgTable("users", {
  /**
   * Unique identifier for the user.
   * Defaults to a randomly generated UUID.
   */
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),

  /**
   * The username of the user.
   * Must be unique and cannot be null.
   */
  username: text("username").notNull().unique(),

  /**
   * The password of the user.
   * Cannot be null. Note: In a real application, this should store a hashed password.
   */
  password: text("password").notNull(),
});

/**
 * Zod schema for validating user insertion data.
 * Extracted from the 'users' table definition using drizzle-zod.
 * Only 'username' and 'password' are required for insertion.
 */
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

/**
 * Type definition for the data required to insert a new user.
 * Inferred from the insertUserSchema.
 */
export type InsertUser = z.infer<typeof insertUserSchema>;

/**
 * Type definition for a User record as selected from the database.
 * Inferred from the users table definition.
 */
export type User = typeof users.$inferSelect;
