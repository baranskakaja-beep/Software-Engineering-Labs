
import {validateLogin} from "../utils/schedulerUtils"


describe('validateLogin', () =>{
  it('returns true for valid university email and password', () => {
    expect(validateLogin('student@edu.p.lodz.pl', 'pass123')).toBe(true)
  })

  it('returns false for non-university email', () => {
    expect(validateLogin('student@gmail.com', 'pass123')).toBe(false)
  })

  it('returns false when password is shorter than 4 characters', () => {
    expect(validateLogin('student@edu.p.lodz.pl', 'abc')).toBe(false)
  })


})
