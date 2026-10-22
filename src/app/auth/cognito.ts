const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;
const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const configuredRedirectUri = import.meta.env.VITE_COGNITO_REDIRECT_URI;

function toBase64Url(bytes: Uint8Array): string {
  let binary = '';
  bytes.forEach(byte => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function createCodeChallenge(verifier: string): Promise<string> {
  const data = new TextEncoder().encode(verifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return toBase64Url(new Uint8Array(digest));
}

export async function getCognitoLoginUrl(): Promise<string | null> {
  if (!cognitoDomain || !clientId) {
    return null;
  }

  const state = crypto.randomUUID();
  const verifier = toBase64Url(crypto.getRandomValues(new Uint8Array(32)));
  sessionStorage.setItem('cognito_test_state', state);
  sessionStorage.setItem('cognito_test_verifier', verifier);

  const redirectUri = configuredRedirectUri || window.location.origin;
  const domain = cognitoDomain.replace(/\/+$/, '');
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    scope: 'openid email profile',
    redirect_uri: redirectUri,
    state,
    code_challenge_method: 'S256',
    code_challenge: await createCodeChallenge(verifier),
  });

  return `${domain}/oauth2/authorize?${params.toString()}`;
}

export async function readCognitoCallback(): Promise<{ tokenType: 'access_token'; token: string } | null> {
  if (!cognitoDomain || !clientId) {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  const expectedState = sessionStorage.getItem('cognito_test_state');
  const verifier = sessionStorage.getItem('cognito_test_verifier');

  if (!code || !state || !expectedState || state !== expectedState || !verifier) {
    return null;
  }

  sessionStorage.removeItem('cognito_test_state');
  sessionStorage.removeItem('cognito_test_verifier');

  const redirectUri = configuredRedirectUri || window.location.origin;
  const domain = cognitoDomain.replace(/\/+$/, '');
  const response = await fetch(`${domain}/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId,
      code,
      redirect_uri: redirectUri,
      code_verifier: verifier,
    }),
  });

  if (!response.ok) {
    throw new Error(`Token exchange failed (${response.status})`);
  }

  const tokens = await response.json() as { access_token?: string };
  if (tokens.access_token) {
    return { tokenType: 'access_token', token: tokens.access_token };
  }

  return null;
}

export function readCognitoError(): string | null {
  const params = new URLSearchParams(window.location.search || window.location.hash.replace(/^#/, ''));
  return params.get('error_description') || params.get('error');
}
