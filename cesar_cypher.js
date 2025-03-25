function shiftCharacter(char, shiftFactor) {
  if (/[a-zA-Z]/.test(char)) {
    if (char >= "a" && char <= "z") {
      // if lower case
      return String.fromCharCode(
        ((char.charCodeAt(0) - "a".charCodeAt(0) + shiftFactor) % 26) +
          "a".charCodeAt(0)
      );
    } else {
      return String.fromCharCode(
        ((char.charCodeAt(0) - "A".charCodeAt(0) + shiftFactor) % 26) +
          "A".charCodeAt(0)
      );
    }
  }
  return char;
}

function cesarCypher(string, shiftFactor) {
  return string
    .split("")
    .map((char) => shiftCharacter(char, shiftFactor))
    .join("");
}

module.exports = { cesarCypher, shiftCharacter };
