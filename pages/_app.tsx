import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Loading } from '../components/organisms/CommonOrgs/Loading';
import { useLoading } from '../hooks/useLoading';

function MyApp({ Component, pageProps }: AppProps) {

  const { loading } = useLoading();

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
