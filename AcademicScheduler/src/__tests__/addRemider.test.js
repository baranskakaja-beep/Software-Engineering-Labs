import { expect, test } from 'vitest';
import { addReminder, organizeReminders, getNextFreeSlot } from '../utils/schedulerUtils';

test('addReminder adds item to list', () => {
  expect(addReminder([], { title: 'Exam' })).toHaveLength(1);
});

test('organizeReminders splits past and future dates', () => {
  const res = organizeReminders([{ dueDate: '2020-01-01' }, { dueDate: '2030-01-01' }], '2026-04-27');
  expect(res.overdue.length === 1 && res.upcoming.length === 1).toBe(true);
});

test('getNextFreeSlot pushes past conflicting events', () => {
  expect(getNextFreeSlot([{ start: '09:00', end: '10:30' }], '09:30')).toBe('10:30');
});

test('getNextFreeSlot keeps requested time if free', () => {
  expect(getNextFreeSlot([{ start: '09:00', end: '10:30' }], '11:00')).toBe('11:00');
});