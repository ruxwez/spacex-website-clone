import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Funcion para concatenar classnames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}