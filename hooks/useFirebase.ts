import { collection, doc, getDocs, query, orderBy, limit, addDoc } from 'firebase/firestore';
import { db } from "../fire";
import { useState } from 'react';

export const useFirebase = () => {

  const [user, setUser] = useState([]);
  const userRef = collection(db, "score")

  const getRanking = async () => {
    
    // const querySnapshot = await getDocs(userRef);
    const q = query(userRef, orderBy("score", "desc"), limit(20));
    const querySnapshot = await getDocs(q)
    const users: {}[] = [];

    querySnapshot.forEach((doc) => {
      const soleUser = {
        name: doc.data().name,
        score:doc.data().score,
      }
      // console.log(soleUser)
      users.push(soleUser);
      
    })
    // console.log(users)
    setUser(users)
    // console.log(user)
  }

  const addRanking = async (name: string, score: number) => {
    await addDoc(userRef, {
        name:name,
        score:score,
    })
  }
  
  return { getRanking, addRanking, user }
  
}
