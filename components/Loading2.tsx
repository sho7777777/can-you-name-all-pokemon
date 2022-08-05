// Hook
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

type Props = {
  setLoading: (loading: boolean) => void;
}

export const Loading: FC<Props> = (props) => {
  const router = useRouter();
  // const [loading, setLoading] = useState(false);
  const { setLoading } = props;

  useEffect(() => {
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: string) => (url === router.asPath) && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    }
  })

  // return loading && (
  return (
    <div className="flex justify-center z-50">
      <div className="z-50 animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  )
}
