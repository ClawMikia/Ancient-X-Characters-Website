ANCIENT X — Sample Website
===========================

FILES:
  index.html      — Home page
  about.html      — About / Lore page
  characters.html — Characters page (main feature)
  creator.html    — Creator details page
  style.css       — All styles
  main.js         — Shared scripts (navbar, particles, animations)
  characters.js   — Character selector + data

ADDING YOUR OWN CHARACTER IMAGES:
  Avatar (selector thumbnail):
    Place a square image named char1.jpg, char2.jpg ... char6.jpg
    in the same folder.

  Full Art (large display panel):
    Place images named char1_art.jpg, char2_art.jpg ... char6_art.jpg
    in the same folder. If no art image is found, the SVG placeholder shows.

  Logo:
    Replace logo.png with your own banner image.

EDITING CHARACTER DATA:
  Open characters.js and edit the `characters` array.
  Each entry has: name, fullName, dob, gender, height, race,
  personality, rank, artSrc, accentColor, storyTitle, story (HTML).

HOW TO USE:
  Just open index.html in any modern browser. No server needed.
  All pages link to each other via the navbar.
