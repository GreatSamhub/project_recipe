// auth.js
import { createAuthProvider } from 'react-token-auth';

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: 'access_token',
  onUpdateToken: (token) =>
    fetch('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refresh_token: token.refresh_token }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((r) => r.json()),
});
