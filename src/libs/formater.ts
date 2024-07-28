const MONTHS = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

/**
 * @params date: Timestamp | Valid date format
 * @returns String with format (MM DD, YYYY)
 */
export const dateFormat = (_date: number | string) => {
  const date = new Date(_date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${MONTHS[month]} ${day}, ${year}`;
}