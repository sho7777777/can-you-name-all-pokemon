import { collection, getDocs, query, orderBy, limit, addDoc } from 'firebase/firestore';
import { db } from "../firebase/init";
import { useState } from 'react';
import { useRouter } from 'next/router';

type User = {
  name: string;
  score: number;
}

export const useFirebase = () => {

  const [user, setUser] = useState<User[]>([]);
  const userRef = collection(db, "score")
  const router = useRouter();

  const getRanking = async () => {
    try {
      const q = query(userRef, orderBy("score", "desc"), limit(20));
      const querySnapshot = await getDocs(q)
      const users: User[] = [];

      querySnapshot.forEach((doc) => {
        const soleUser = {
          name: doc.data().name,
          score: doc.data().score,
        }
        users.push(soleUser);
      })
      setUser(users)
    } catch (e) {
      router.push('/sorry');
    }
  }

  const addRanking = async (name: string, score: number) => {
    try {
      if (name.length > 0 && name.length < 11)
        await addDoc(userRef, {
          name: name,
          score: score,
        })
    } catch (e) {
      console.log(e);
    }
  }

  return { getRanking, addRanking, user }
}
