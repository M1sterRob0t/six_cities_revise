const AUTH_KEY = 'six-cities-revise-token';

type TToken = string;

export function saveToken(token: TToken): void {
  localStorage.setItem(AUTH_KEY, token);
}

export function dropToken(): void {
  localStorage.removeItem(AUTH_KEY);
}

export function getToken(): TToken {
  const token = localStorage.getItem(AUTH_KEY);
  return token ?? '';
}
