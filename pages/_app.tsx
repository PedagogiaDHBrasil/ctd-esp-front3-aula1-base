import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Devemos adicionar o componente Layout para compartilhá-lo em qualquer página
    <Component {...pageProps} />
  );
}

export default MyApp;
