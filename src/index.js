export const noop = () => {};

// slugify: lowercase, spaces -> dashes, strip non-alphanumerics.
export const slugify = (str) =>
  String(str)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// titleCase: capitalize the first letter of each word.
export const titleCase = (str) =>
  String(str)
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

// reverse: return the string reversed.
export const reverse = (str) => String(str).split("").reverse().join("");
