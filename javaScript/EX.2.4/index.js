function  currentDate() {
  const currentDate = new Date();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = monthsOfYear[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `Today is ${dayOfWeek} the ${dayOfMonth} of ${month} ${year}`;
}
//calling the func
const currentDate1 = currentDate();
console.log(currentDate1);
