export function validateLogin(email, password) {
	return email.endsWith('@edu.p.lodz.pl') && password.length >= 4
  }