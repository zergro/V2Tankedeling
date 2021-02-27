import axios from 'axios';
import { useState, useEffect } from 'react';

import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/articles')
      .then((res) => setPosts(res.data))
      .then(console.log('We are sending a request'));
  }, []);

  return (
    <div className="container mt-8">
      <div className="flex space-x-10 mx-52">
        <div className="w-1/3">
          <figure className="">
            <img
              className=""
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            ></img>
            <div className="pt-6 text-left space-y-4">
              <blockquote>
                <p className="text-lg font-semibold">
                  North Korea: Russian diplomats leave by hand-pushed trolley
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan 600">Erling Rognhaugen #Russia</div>
                <div className="text-gray-500">
                  Freelance journalist in Norway
                </div>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="w-1/3">
          <div class="w-full h-1/4 mb-3">
            <figure className="flex">
              <div className="text-left">
                <blockquote>
                  <p className="font-semibold">
                    North Korea: Russian diplomats leave by hand-pushed trolley
                  </p>
                </blockquote>
                <figcaption className="font-thin">
                  <div className="text-cyan 600">Erling Rognhaugen #Russia</div>
                  <div className="text-cyan 600">
                    21. feb &#8226; 3 min read
                  </div>
                </figcaption>
              </div>
              <img
                className="w-24 h-24 object-cover"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              ></img>
            </figure>
          </div>
          <div class="w-full h-1/4 mb-3">
            <figure className="flex">
              <div className="text-left">
                <blockquote>
                  <p className="font-semibold">
                    North Korea: Russian diplomats leave by hand-pushed trolley
                  </p>
                </blockquote>
                <figcaption className="font-thin">
                  <div className="text-cyan 600">Erling Rognhaugen #Russia</div>
                  <div className="text-cyan 600">
                    21. feb &#8226; 3 min read
                  </div>
                </figcaption>
              </div>
              <img
                className="w-24 h-24 object-cover"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              ></img>
            </figure>
          </div>
          <div class="w-full h-1/4 mb-3">
            <figure className="flex">
              <div className="text-left">
                <blockquote>
                  <p className="font-semibold">
                    North Korea: Russian diplomats leave by hand-pushed trolley
                  </p>
                </blockquote>
                <figcaption className="font-thin">
                  <div className="text-cyan 600">Erling Rognhaugen #Russia</div>
                  <div className="text-cyan 600">
                    21. feb &#8226; 3 min read
                  </div>
                </figcaption>
              </div>
              <img
                className="w-24 h-24 object-cover"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              ></img>
            </figure>
          </div>
          <div class="w-full h-1/4">
            <figure className="flex">
              <div className="text-left">
                <blockquote>
                  <p className="font-semibold">
                    North Korea: Russian diplomats leave by hand-pushed trolley
                  </p>
                </blockquote>
                <figcaption className="font-thin">
                  <div className="text-cyan 600">Erling Rognhaugen #Russia</div>
                  <div className="text-cyan 600">
                    21. feb &#8226; 3 min read
                  </div>
                </figcaption>
              </div>
              <img
                className="w-24 h-24 object-cover"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              ></img>
            </figure>
          </div>
        </div>

        <div className="w-1/3">
          <div className="">
            <div>Newest members</div>
            <div className="flex space-x-6 mt-2">
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
            <div>See all our authors</div>
          </div>
          <div className="mt-10">
            <div className="mb-5">Topics to read about</div>
            <ul className="space-y-4">
              <div className="flex justify-between">
                <li>#Trump</li>
                <button
                  type="button"
                  className="focus:outline-none text-white text-sm py-1 px-3 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
                >
                  Check out
                </button>
              </div>
              <div className="flex justify-between">
                <li>#GlobalWarming</li>
                <button
                  type="button"
                  className="focus:outline-none text-white text-sm py-1 px-3 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
                >
                  Check out
                </button>
              </div>
              <div className="flex justify-between">
                <li>#Technology</li>
                <button
                  type="button"
                  className="focus:outline-none text-white text-sm py-1 px-3 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
                >
                  Check out
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
// {posts?.map((p) => (
//   <div className="" key={p.id}>
//     <PostCard post={p} />
//   </div>
// ))}
