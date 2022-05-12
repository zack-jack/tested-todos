import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@auth0/nextjs-auth0";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
