export function validateLogin(email, password) {
  if (!email || !password) {
    return false; 
  }

  const hasValidDomain = email.endsWith('@edu.p.lodz.pl');
  const isLongEnough = password.length >= 4;

  return hasValidDomain && isLongEnough;
}