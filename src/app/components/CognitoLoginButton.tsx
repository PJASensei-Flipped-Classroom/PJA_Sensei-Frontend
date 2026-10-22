import { useEffect, useState } from 'react';
import { getCognitoLoginUrl, readCognitoCallback, readCognitoError } from '../auth/cognito';

export function CognitoLoginButton() {
  const [token, setToken] = useState<string | null>(null);
  const [copyLabel, setCopyLabel] = useState('Kopiuj token');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const callback = await readCognitoCallback();
        if (callback) {
          setToken(callback.token);
          window.history.replaceState({}, document.title, window.location.pathname);
          return;
        }

        const error = readCognitoError();
        if (error) {
          window.alert(`Cognito login error:\n\n${error}`);
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      } catch (error) {
        window.alert(error instanceof Error ? error.message : 'Cognito token exchange failed');
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };

    void handleCallback();
  }, []);

  const handleLogin = async () => {
    const loginUrl = await getCognitoLoginUrl();
    if (!loginUrl) {
      window.alert(
        'Brak konfiguracji Cognito. Ustaw VITE_COGNITO_DOMAIN i VITE_COGNITO_CLIENT_ID.'
      );
      return;
    }

    window.location.assign(loginUrl);
  };

  return (
    <>
      <button
        onClick={handleLogin}
        className="px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors text-sm hidden sm:block"
      >
        Zaloguj się
      </button>
      {token && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-lg border border-border bg-background p-5 shadow-xl">
            <div className="mb-3 flex items-center justify-between gap-4">
              <h2 className="font-semibold">Token testowy Cognito</h2>
              <button
                onClick={() => setToken(null)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Zamknij
              </button>
            </div>
            <textarea
              readOnly
              value={token}
              onFocus={event => event.currentTarget.select()}
              className="mb-3 min-h-32 w-full resize-y rounded-md border border-border bg-muted/50 p-3 font-mono text-xs"
            />
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(token);
                setCopyLabel('Skopiowano');
                window.setTimeout(() => setCopyLabel('Kopiuj token'), 1500);
              }}
              className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            >
              {copyLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
