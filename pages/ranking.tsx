// Component
import { Layout } from '../components/Layout';

// Hook
import { useEffect } from 'react';
import { useFirebase } from '../hooks/useFirebase';


export default function Ranking() {

  const { getRanking, user } = useFirebase();

  useEffect(() => {
    getRanking();
  }, [])

  return (
    <div>
      <Layout>
        <div className="container mx-auto pt-3 flex flex-col h-screen">
          <h1 className=" text-center text-3xl text-gray-600 mb-4">ランキング</h1>
          {/* ---Ranking--- */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-center table-fixed">
              <thead className='border-b'>
                <tr>
                  <th scope="col" className='w-1/4 text-gray-600'>Rank</th>
                  <th scope="col" className='w-1/4 text-gray-600'>なまえ</th>
                  <th scope="col" className='w-1/4 text-gray-600'>とくてん</th>
                </tr>
              </thead>
              <tbody className='border-b'>
                {user.map((data, index) => (
                  <tr key={index} className="border-b text-gray-600 py-4">
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  )
}
