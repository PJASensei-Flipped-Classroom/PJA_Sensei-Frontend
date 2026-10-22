
  # Main screen design (Copy) przebudowa do wtyczki (Copy)

  This is a code bundle for Main screen design (Copy) przebudowa do wtyczki (Copy). The original project is available at https://www.figma.com/design/svXfAUCtsX4hUfwRD90NBc/Main-screen-design--Copy--przebudowa-do-wtyczki--Copy-.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Test login with Cognito

  The `Zaloguj się` button uses the Cognito Hosted UI Authorization Code +
  PKCE flow and displays the returned access token in a copyable test dialog.

  Copy `.env.example` to `.env` and fill in the Cognito values:

  ```env
  VITE_COGNITO_DOMAIN=https://your-domain.auth.eu-central-1.amazoncognito.com
  VITE_COGNITO_CLIENT_ID=your-app-client-id
  VITE_COGNITO_REDIRECT_URI=http://localhost:5173
  VITE_COGNITO_LOGOUT_URI=http://localhost:5173
  ```

  Configure the same redirect URI in the Cognito app client and enable the
  `openid`, `email`, and `profile` scopes. Enable the **Authorization code
  grant** flow, not Implicit grant. `VITE_COGNITO_REDIRECT_URI` can be omitted
  to use the current origin.

  Configure the logout URI in the app client's allowed sign-out URLs.

  Do not put a Cognito client secret in `.env` or frontend code. Browser-based
  Cognito app clients must be configured as public clients without a secret.
  