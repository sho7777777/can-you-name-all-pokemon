import Link from 'next/link';
import Layout from '../components/Layout';
import { useFirebase } from '../hooks/useFirebase';
import { useEffect, useState } from 'react';


export default function Ranking() {

  const { getRanking, user } = useFirebase();

  useEffect(() => {
    getRanking();
  }, [])


  // console.log(user)


  return (
    <div>
      <Layout>
        <div className="container mx-auto pt-3 flex flex-col">
          <h1 className="bg-cyan-100 text-center">ランキング</h1>
          <div className="overflow-x-auto">

            <table className="min-w-full text-center table-fixed">
              <thead className='border-b'>
                <tr>
                  <th scope="col" className='w-1/4 text-gray-800'>#</th>
                  <th scope="col" className='w-1/4 text-gray-80'>なまえ</th>
                  <th scope="col" className='w-1/4 text-gray-80'>とくてん</th>
                </tr>
              </thead>
              <tbody className='border-b'>
                {/* <tr className="border-b text-gray-500 py-4">
                  <td className=''>1</td>
                  <td className=''>たなか</td>
                  <td className=''>29</td>
                </tr> */}
                {user.map((data, index) => (
                  <tr key={index} className="border-b text-gray-500 py-4">
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
