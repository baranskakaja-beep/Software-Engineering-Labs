export function validateLogin(email, password) {
  if (!email || !password) {
    return false; 
  }

  const hasValidDomain = email.endsWith('@edu.p.lodz.pl');
  const isLongEnough = password.length >= 4;

  return hasValidDomain && isLongEnough;
}

export const addReminder = (reminders, newReminder) => [...reminders, newReminder];

export const organizeReminders = (reminders, dateStr) => reminders.reduce(
  (acc, r) => {
    acc[r.dueDate < dateStr ? 'overdue' : 'upcoming'].push(r);
    return acc;
  }, 
  { overdue: [], upcoming: [] }
);

export const getNextFreeSlot = (events, time) => {
  const conflict = events.find(e => time >= e.start && time < e.end);
  return conflict ? conflict.end : time;
};