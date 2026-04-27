import { addReminder } from '../utils/schedulerUtils'

describe('addReminder', () => {
  it('adds a new reminder to an empty list', () => {
    const result = addReminder([], { title: 'Math exam', dueDate: '2026-05-01' })
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('Math exam')
  })
})