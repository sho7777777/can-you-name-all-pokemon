import { HeaderParts } from '../molecules/HeaderParts';

export const Header = () => {

  return (
    <div className='sticky z-10 top-0 bg-green-200'>
      <div className="container py-2 mx-auto">
        <HeaderParts />
      </div>
    </div >
  )
}
