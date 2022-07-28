import Link from 'next/link';
import Layout from '../components/Layout';


export default function Ranking() {
  return (
    <div>
      <Layout>
        <Link href="/">
          <p>トップに戻る</p>
        </Link>
        <p>ランキング</p>
      </Layout>
    </div>

  )
}
