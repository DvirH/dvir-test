export const noop = () => {};

// slugify: lowercase, spaces -> dashes, strip non-alphanumerics.
export const slugify = (str) =>
  String(str)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
