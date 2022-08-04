import { collection, doc, getDocs, query, orderBy, limit, addDoc } from 'firebase/firestore';
import { db } from "../fire";
import { useState } from 'react';

type User = {
  name: string;
  score: number;
}

export const useFirebase = () => {

  const [user, setUser] = useState<User[]>([]);
  const userRef = collection(db, "score")

  const getRanking = async () => {
    
    try{
      const q = query(userRef, orderBy("score", "desc"), limit(20));
      const querySnapshot = await getDocs(q)
      const users: User[] = [];
  
      querySnapshot.forEach((doc) => {
        const soleUser = {
          name: doc.data().name,
          score:doc.data().score,
        }
        users.push(soleUser);
      })
      setUser(users)
    }catch(e){
      alert("Sorry")
    }
    
  }

  const addRanking = async (name: string, score: number) => {
    await addDoc(userRef, {
        name:name,
        score:score,
    })
  }
  
  return { getRanking, addRanking, user }
  
}
