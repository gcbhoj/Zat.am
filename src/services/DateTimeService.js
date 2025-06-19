export function getFormattedDateTime(locale = navigator.language) {
  const now = new Date();
    
    const weekday = new Intl.DateTimeFormat(locale, {
        weekday:"long"
    }).format(now)

  const date = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);

  const time = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);

    return {
      weekday,
    date,
    time,
  };
}
