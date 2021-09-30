const dateFormatter = new Intl.DateTimeFormat([]);

export function formatDate(unixTimestamp: number): string {
  return dateFormatter.format(new Date(unixTimestamp));
}
