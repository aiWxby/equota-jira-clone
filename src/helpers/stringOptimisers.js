export function makeFirstLetterUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function makeStringKebabCase(string) {
  return string.trim().toLowerCase().replace(" ", "-");
}

export function optimiseStringToEnglishAlphabet(string) {
  const trMap = {
    çÇ: "c",
    ğĞ: "g",
    şŞ: "s",
    üÜ: "u",
    ıİ: "i",
    öÖ: "o",
  };

  for (var key in trMap) {
    string = string.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
  }

  return string.replace(/[^-a-zA-Z0-9\s]+/gi, "");
}
