import type { NextPage } from 'next'
import { TopTemplate } from '../components/templates/TopTemplate';
import { LayoutTemplate } from '../components/templates/LayoutTemplate'

const Home: NextPage = () => {

  return (
    <LayoutTemplate>
      <main>
        <TopTemplate />
      </main>
    </LayoutTemplate>
  )
}

export default Home
