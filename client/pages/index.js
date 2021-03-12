import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import BigArticleCard from '../components/BigArticleCard';
import SmallArticleCard from '../components/SmallArticleCard';

export default function Home() {
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

  const [bigPost, setBigPost] = useState(null);
  const [smallPosts, setSmallPosts] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/articles?_sort=created_at:DESC&_limit=1')
      .then((res) => setBigPost(res.data));
  }, []);
  useEffect(() => {
    axios
      .get(
        'http://localhost:1337/articles?_sort=created_at:DESC&_start=1&_limit=4'
      )
      .then((res) => setSmallPosts(res.data));
  }, []);

  return (
    <div className="container">
      <div className="mx-52">
        <div className="flex space-x-10 mb-20">
          <div className="w-1/3">
            {bigPost?.map((p) => (
              <div className="" key={p.id}>
                <BigArticleCard post={p} />
              </div>
            ))}
          </div>
          <div className="w-1/3">
            {smallPosts?.map((p) => (
              <div className="w-full h-1/4 mb-3">
                <div className="" key={p.id}>
                  <SmallArticleCard post={p} />
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/3">
            <div className="">
              <div>Newest members</div>
              <div className="flex space-x-6">
                <figure className="">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  ></img>
                  <figcaption className="text-xs text-center">
                    <div className="text-cyan 600">Erling Rog...</div>
                  </figcaption>
                </figure>
                <figure className="">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  ></img>
                  <figcaption className="text-xs text-center">
                    <div className="text-cyan 600">Erling Rog...</div>
                  </figcaption>
                </figure>
                <figure className="">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  ></img>
                  <figcaption className="text-xs text-center">
                    <div className="text-cyan 600">Erling Rog...</div>
                  </figcaption>
                </figure>
                <figure className="">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  ></img>
                  <figcaption className="text-xs text-center">
                    <div className="text-cyan 600">Erling Rog...</div>
                  </figcaption>
                </figure>
              </div>
              <div className="flex space-x-6 mt-4">
                <figure className="">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  ></img>
                  <figcaption className="text-xs text-center">
                    <div className="text-cyan 600">Erling Rog...</div>
                  </figcaption>
                </figure>
                <figure className="">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  ></img>
                  <figcaption className="text-xs text-center">
                    <div className="text-cyan 600">Erling Rog...</div>
                  </figcaption>
                </figure>
                <figure className="">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  ></img>
                  <figcaption className="text-xs text-center">
                    <div className="text-cyan 600">Erling Rog...</div>
                  </figcaption>
                </figure>
                <figure className="">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  ></img>
                  <figcaption className="text-xs text-center">
                    <div className="text-cyan 600">Erling Rog...</div>
                  </figcaption>
                </figure>
              </div>
              {/* <div>See all our authors</div> */}
            </div>
            <div className="mt-10">
              <div className="">
                <div>Quote of today</div>
                <div className="mt-5">
                  “My life amounts to no more than one drop in a limitless
                  ocean. Yet what is any ocean, but a multitude of drops?”
                </div>
                <div>― David Mitchell, Cloud Atlas</div>
              </div>
            </div>
          </div>
        </div>
        <section className="pt-10 pb-10 bg-blue-600">
          <div className="max-w-xl mx-auto text-center">
            <span className="inline-block py-1 px-3 bg-blue-500 text-xs text-white font-semibold rounded-xl">
              Spread your opinion
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl text-white font-bold font-heading">
              Creating and sharing articles has never been easier.
            </h2>
            <div className="mt-6">
              {user ? (
                <>
                  <Link href="/create">
                    <a className="inline-block text-xs py-4 px-8 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-semibold leading-none border hover:border-white rounded transition duration-300">
                      Create your own articles here!
                    </a>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <a className="inline-block text-xs py-4 px-8 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-semibold leading-none border hover:border-white rounded transition duration-300">
                      Create your own articles here!
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
