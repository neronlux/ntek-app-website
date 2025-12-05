import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, handling conditional classes and resolving Tailwind CSS conflicts.
 *
 * Uses `clsx` to construct the class string and `tailwind-merge` to merge conflicting Tailwind classes.
 *
 * @param {...ClassValue[]} inputs - A list of class values (strings, objects, arrays) to combine.
 * @returns {string} The merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
