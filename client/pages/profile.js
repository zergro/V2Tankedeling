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
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-8">
      <div className="mx-52">
        {/* {posts?.map((p) => (
          <div className="" key={p.id}>
            <PostCard post={p} />
          </div>
        ))} */}
      </div>
    </div>
  );
}
