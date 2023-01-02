import "../styles/globals.css";
import { AppProps } from "next/app";
import { LoadingOrganism } from "../components/organisms/CommonOrgs/LoadingOrganism";
import { useLoading } from "../hooks/useLoading";

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = useLoading();

  return (
    <>
      {loading && <LoadingOrganism />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
