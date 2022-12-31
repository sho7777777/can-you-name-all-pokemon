import { Credit } from '../organisms/Credit';
import { Menu } from '../organisms/Top/Menu';
import { TopPageBody } from '../organisms/Top/TopPageBody';

export const Top = () => {

  return (
    <div className="bg-white container mx-auto h-screen pt-20 bg-transparent">
      <TopPageBody />
      <Menu />
      <Credit />
    </div>
  )
}
