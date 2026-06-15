# String Utils

## slugify

### What it does
- Turns any text into a URL-friendly slug.

### Options / Modes
- Lowercases the text.
- Replaces spaces with dashes.
- Strips characters that are not letters, numbers, or dashes.

### Notes
- Example: `slugify("Hello World!")` returns `hello-world`.

## titleCase

### What it does
- Capitalizes the first letter of every word in the text.

### Options / Modes
- Lowercases the rest of each word.

### Notes
- Example: `titleCase("hello world")` returns `Hello World`.
