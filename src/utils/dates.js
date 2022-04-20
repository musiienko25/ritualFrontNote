export function formattedDate(date, lang, options) {
  return new Date(date).toLocaleDateString(lang, options);
}
