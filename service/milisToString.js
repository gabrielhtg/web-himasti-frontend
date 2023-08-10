export default function milisToString(milis) {
  const date = new Date(+milis);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = date.getFullYear();
  let month = months[date.getMonth()];
  let day = date.getDate();

  return `${day} ${month} ${year}`;
}
