/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  Mo,
  Th,
  Wd,
  Thur,
  Fr,
  Sa,
  Sn,
}

function isWeekend(day: Day): boolean {
  if (day === Day.Sa || Day.Sn) {
    return true;
  }
  return false;
}
