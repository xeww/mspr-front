export function getFullDateAndHour(dateStr) {
  const date = new Date(dateStr);
  const options = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    timeZone: "Europe/Paris",
  };

  return new Intl.DateTimeFormat("fr-FR", options).format(date);
}

export function getFullDate(dateStr) {
  const date = new Date(dateStr);
  const options = {
    day: "numeric",
    month: "long",
    timeZone: "Europe/Paris",
  };

  return new Intl.DateTimeFormat("fr-FR", options).format(date);
}

export function getHour(dateStr) {
  const date = new Date(dateStr);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Paris",
  };

  return new Intl.DateTimeFormat("fr-FR", options).format(date);
}

export function isDateBetween(d, start, end) {
  return d.valueOf() >= start.valueOf() && d.valueOf() <= end.valueOf();
}
