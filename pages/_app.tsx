import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
