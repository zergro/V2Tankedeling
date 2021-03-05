import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import PostCard from '../components/BigArticleCard';

export default function Home() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    axios
      .get('/users/me', { headers: { Authorization: `Bearer ${jwt}` } })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-8">
      <div className="mx-52">
        {user ? (
          <>
            <div>Welcome {user.username}</div>
            <div>You have written {user.articles.length} articles</div>
            <div>The email registered to you is {user.email}</div>
          </>
        ) : (
          <>
            <div>You're recieving data</div>
          </>
        )}
      </div>
    </div>
  );
}
