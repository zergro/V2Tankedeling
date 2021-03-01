import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return;
    axios
      .get(`http://localhost:1337/articles/${slug}`)
      .then((res) => setPost(res.data));
  }, [slug]);
  const stringDate = post.published_at;
  console.log(stringDate);
  const sepDate = stringDate.split('T');
  console.log(sepDate[0]);
  const newDate = sepDate[0].split('-');
  console.log('The day is ' + newDate[2]);
  const day = newDate[2];
  console.log('The month is ' + newDate[1]);
  const month = newDate[1];

  function caseInSwitch(val) {
    var valMonth = '';
    // Only change code below this line
    switch (val) {
      case '01':
        valMonth = 'Jan';
        break;
      case '02':
        valMonth = 'Feb';
        break;
      case '03':
        valMonth = 'Mar';
        break;
      case '04':
        valMonth = 'Apr';
        break;
      case '05':
        valMonth = 'Mai';
        break;
      case '06':
        valMonth = 'Jun';
        break;
      case '07':
        valMonth = 'Jul';
        break;
      case '08':
        valMonth = 'Aug';
        break;
      case '09':
        valMonth = 'Sep';
        break;
      case '10':
        valMonth = 'Oct';
        break;
      case '11':
        valMonth = 'Nov';
        break;
      case '12':
        valMonth = 'Dec';
        break;
    }

    // Only change code above this line
    return valMonth;
  }

  const corrMonth = caseInSwitch(month);
  console.log(corrMonth);

  return (
    <>
      <section className="">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            {post && (
              <div>
                <h2 className="text-4xl md:text-5xl mt-4 font-bold font-heading py-10">
                  {post.title}
                </h2>
                <div className="flex mb-8 justify-between">
                  <div className="w-1/3 flex">
                    <img
                      className="w-12 h-12 object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                      alt=""
                    />
                    <div className="pl-4">
                      <p className="text-blueGray-500 mb-1">
                        {post.author.username}
                      </p>
                      <p className="text-xs text-blue-600 font-semibold">
                        Author
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 text-center">
                    <p className="text-blueGray-500 mb-1">
                      {day}. {corrMonth} &#8226; {post.category.CategoryName}
                    </p>
                    <p className="text-xs text-blue-600 font-semibold">
                      6 min read
                    </p>
                  </div>
                  <div className="w-1/3 flex">
                    <button
                      type="button"
                      className="ml-auto focus:outline-none text-white text-sm py-1 px-3 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
                    >
                      Share
                    </button>
                  </div>
                </div>
                {post?.image && (
                  <img
                    className="justify-center object-center"
                    src={`${process.env.NEXT_PUBLIC_API_URL}${post.image?.url}`}
                  />
                )}
                <div className="text-center font-thin">
                  Text that explains photo and source.
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
