// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinCharacters = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

let delay = 100;
for (let character of spinCharacters) {
  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, delay += 200);
}