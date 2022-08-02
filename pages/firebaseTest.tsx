import { db } from '../fire/index'
import { collection, getDocs, doc, setDoc, addDoc, query, where } from "firebase/firestore";
import { useState } from 'react';

export default function FirebaseTest() {

  const [user, setUser] = useState('user');

  const userRef = collection(db, "score")
  const q = query(userRef, where("score", "==", 20));

  const ranking: {}[] = [];

  const getScore = async () => {

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      ranking.push(doc.data())
      // console.log(doc.id, doc.data());
      console.log(doc.data())
    })

    // console.log(ranking)
    // console.log(ranking[0])
    // console.log(ranking[0].name)
  }

  getScore()

  // const getFirebaseData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "score"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data().name}:${doc.data().score}`);
  //   })
  // }

  // const addScore = async (user: string) => {
  //   await setDoc(doc(db, "score", user), {
  //     name: "test2",
  //     score: 20
  //   })
  // }

  const addScore = async (user: string) => {
    await addDoc(collection(db, "score"), {
      name: user,
      score: 43
    })
  }

  // addScore()

  // getFirebaseData();

  const addRank = () => {
    // console.log(user)
    addScore(user)
  }

  const handleChange = (e: any) => {
    setUser(e.target.value)

    // console.log(e.target.value)
  }

  return (
    <div>
      <p>Firebase</p>
      <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={user} onChange={handleChange} />
      <button type="button" className="border-gray-500 bg-pink-300 rounded drop-shadow-lg mt-20 ml-20" onClick={addRank}>とうろく</button>

    </div>
  )
}
