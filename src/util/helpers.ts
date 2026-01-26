
export function parseDate(date: any) {
  const newDate =
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    }).format(new Date(date))
  return newDate
}
