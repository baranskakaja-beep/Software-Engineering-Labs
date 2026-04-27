export function validateLogin(email, password) {
	return (
		typeof email === 'string' &&
		email.endsWith('@edu.p.lodz.pl') &&
		typeof password === 'string' &&
		password.length > 0
	);
}
