// export const getToken = () => {
//   if (typeof window === 'undefined') return null;
//   return localStorage.getItem('admin_token');
// };

// export const setToken = (token: string) => {
//   localStorage.setItem('admin_token', token);
// };

// export const removeToken = () => {
//   localStorage.removeItem('admin_token');
// };

// export const isAuthenticated = () => {
//   return !!getToken();
// };


const TOKEN_KEY = 'admin_token';

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}
