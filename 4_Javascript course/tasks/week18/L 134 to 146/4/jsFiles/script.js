let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*

1. `https?`:
    - `http` followed by an optional `s`. This matches both `http` and `https`.

2. `:\/\/`:
    - Matches the literal characters `://`.

3. `(?:[-\w]+\.)?`:
    - `(?: ... )` is a non-capturing group, meaning it groups the enclosed pattern without capturing it for back-references.
    - `[-\w]+` matches one or more (`+`) of any word character (`\w`, which includes letters, digits, and underscores) or hyphen (`-`).
    - `\.` matches a literal dot (`.`).
    - The entire group `(?:[-\w]+\.)?` is optional (`?`), meaning it matches zero or one occurrence of the pattern.

4. `([-\w]+)`:
    - This is a capturing group, meaning it captures the matched text for back-references.
    - `[-\w]+` matches one or more (`+`) of any word character or hyphen.

5. `\.\w+`:
    - `\.` matches a literal dot.
    - `\w+` matches one or more (`+`) word characters.

6. `(?:\.\w+)?`:
    - Another non-capturing group.
    - `\.` matches a literal dot.
    - `\w+` matches one or more word characters.
    - The entire group `(?:\.\w+)?` is optional (`?`).

7. `\/?`:
    - Matches zero or one (`?`) forward slash (`/`).

8. `.*`:
    - `.` matches any character except newline.
    - `*` matches zero or more (`*`) of the preceding element.

9. `i`:
    - This is a flag that makes the regular expression case-insensitive.
*/ 