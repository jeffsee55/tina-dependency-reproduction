import { TinaProvider, TinaCMS } from "tinacms";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const cms = React.useMemo(() => new TinaCMS());

  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
}

export default MyApp;
