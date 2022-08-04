// Component
import type { NextPage } from 'next'
import { Top } from '../components/Top';
import { Layout } from '../components/Layout'

const Home: NextPage = () => {

  return (
    <Layout>
      <main>
        <Top />
      </main>
    </Layout>
  )
}

export default Home
