// Get acronym of string. Ex: name = 'Kevin Winston' returns 'KW'
// Set default `name` to "" so if user forgets to define, it doesn't crash
export const getInitials = (name = "") =>
  name === "" ? "" : name.match(/\b(\w)/g).join("");

export const sortListCreatedFirst = list =>
  list.sort((a, b) => (a.created_at >= b.created_at ? -1 : 1));

export const sortListCreatedLast = list =>
  list.sort((a, b) => (a.created_at >= b.created_at ? 1 : -1));
