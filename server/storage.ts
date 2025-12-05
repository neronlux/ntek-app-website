import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

/**
 * Interface definition for the storage layer.
 * Defines the contract for User CRUD operations.
 */
export interface IStorage {
  /**
   * Retrieves a user by their unique ID.
   * @param {string} id - The ID of the user to retrieve.
   * @returns {Promise<User | undefined>} A promise resolving to the User object or undefined if not found.
   */
  getUser(id: string): Promise<User | undefined>;

  /**
   * Retrieves a user by their username.
   * @param {string} username - The username to search for.
   * @returns {Promise<User | undefined>} A promise resolving to the User object or undefined if not found.
   */
  getUserByUsername(username: string): Promise<User | undefined>;

  /**
   * Creates a new user record.
   * @param {InsertUser} user - The user data to insert.
   * @returns {Promise<User>} A promise resolving to the created User object including the generated ID.
   */
  createUser(user: InsertUser): Promise<User>;
}

/**
 * In-memory implementation of the IStorage interface.
 * Uses a Map to store user data. Useful for development and testing.
 */
export class MemStorage implements IStorage {
  private users: Map<string, User>;

  /**
   * Initializes the in-memory storage.
   */
  constructor() {
    this.users = new Map();
  }

  /**
   * Retrieves a user by their unique ID from memory.
   * @param {string} id - The ID of the user.
   * @returns {Promise<User | undefined>} The user or undefined.
   */
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  /**
   * Retrieves a user by their username from memory.
   * @param {string} username - The username.
   * @returns {Promise<User | undefined>} The user or undefined.
   */
  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  /**
   * Creates a new user in memory.
   * Generates a random UUID for the user ID.
   * @param {InsertUser} insertUser - The user data to insert.
   * @returns {Promise<User>} The created user.
   */
  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

/**
 * Singleton instance of the storage implementation.
 */
export const storage = new MemStorage();
