import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import ProfileArticleCard from '../components/ProfileArticleCard';

export default function Profile() {
  const [user, setUser] = useState(null);

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
    <>
      <div className="container mt-8">
        <div className="mx-52">
          {user ? (
            <>
              <div>Welcome {user.username}</div>
              <div>You have written {user.articles.length} articles</div>
              <div>The email registered to you is {user.email}</div>
              {user.articles?.map((p) => (
                <div className="" key={p.id}>
                  <ProfileArticleCard post={p} />
                </div>
              ))}
            </>
          ) : (
            <>
              <div>You're not recieving data</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
