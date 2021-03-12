import axios from 'axios';
import moment from 'moment';

const Post = ({ post }) => {
  const date = moment(post.published_at).locale('nb').format('ll');

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
                    <p className="text-blueGray-500 mb-1">{date} &#8226; </p>
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

                <article
                  className="prose prose-xl"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const slug = context.req.url.split('/articles/')[1]; // /articles/new-article

  try {
    const { data } = await axios.get(`http://localhost:1337/articles/${slug}`);

    return { props: { post: data } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
}

export default Post;
