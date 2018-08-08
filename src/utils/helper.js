// Get acronym of string. Ex: name = 'Kevin Winston' returns 'KW'
// Set default `name` to "" so if user forgets to define, it doesn't crash
export const getInitials = (name = "") =>
  name === "" ? "" : name.match(/\b(\w)/g).join("");
