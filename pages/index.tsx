import type { NextPage } from 'next'

// Component
import { Top } from '../components/Top';
import Layout from '../components/Layout'

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
