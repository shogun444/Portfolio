export function cn(...classes: Array<string | false | null | undefined>) {
  // Merge truthy className values into a single string
  return classes.filter(Boolean).join(" ");
}
