import "@/styles/globals.css";
import "devextreme/dist/css/dx.material.blue.light.css";
import "../styles/devextreme.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
