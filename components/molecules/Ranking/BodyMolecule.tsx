import React from 'react'
import { useEffect } from 'react';
import { useFirebase } from '../../../hooks/useFirebase';

export const BodyMolecule = () => {

  // const { getRanking, user } = useFirebase();

  // useEffect(() => {
  //   getRanking();
  // }, [])
  const user = [{ name: "aaa", score: 20 }, { name: "bbb", score: 30 }, { name: "ccc", score: 10 }, { name: "ddd", score: 90 }, { name: "eee", score: 120 },]

  return (
    <>
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
            <tr key={index} className="border-b text-gray-600 py-4 text-sm md:text-base">
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
