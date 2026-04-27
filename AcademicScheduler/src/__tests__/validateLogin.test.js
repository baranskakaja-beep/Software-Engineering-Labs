
import {validateLogin} from "../utils/schedulerUtils"


describe('validateLogin', () =>{
  it('returns true for valid university email and password', () => {
    expect(validateLogin('student@edu.p.lodz.pl', 'pass123')).toBe(true)
  })





})
