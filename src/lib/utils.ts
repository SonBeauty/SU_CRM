// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names conditionally.
 * @param inputs - Class names to merge.
 * @returns Merged class names as a string.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to create class names based on a base name, conditionals, and extra classes.
 * @param base - The base class name.
 * @param conditionals - An object where keys are class names and values are booleans indicating whether to include the class.
 * @param extra - Additional class names to include.
 * @returns A string of merged class names.
 */
export function useClassNames(
  base: string,
  conditionals: Record<string, boolean>,
  extra?: string
) {
  return cn(
    base,
    Object.entries(conditionals ?? {})
      .filter(([, value]) => value)
      .map(([key]) => key),
    extra
  );
}

/**
 * Utility functions to check truthiness and falsiness of a value.
 * @param value - The value to check.
 * @returns Boolean indicating if the value is truthy or falsy.
 */
export function isTruthy(value: unknown): boolean {
  return !!value;
}
export function isFalsy(value: unknown): boolean {
  return !value;
}
