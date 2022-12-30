import { Credit } from '../organisms/Credit';
import { TopPageBody } from '../organisms/top/TopPageBody';

export const Top = () => {

  return (
    <div className="bg-white container mx-auto h-screen pt-20 bg-transparent">
      <TopPageBody />
      <Credit />
    </div>
  )
}
