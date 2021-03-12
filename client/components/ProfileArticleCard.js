import Link from 'next/link';
import moment from 'moment';

function ProfileArticleCard({
  post: { title, image, slug, author, published_at, body },
}) {
  const date = moment(published_at).locale('nb').format('ll');

  return (
    <>
      <figure className="flex mb-20">
        <div className="text-left">
          <blockquote>
            <div>
              <div className="font-semibold text-3xl flex">
                <Link href={`/articles/${slug}`}>
                  <a>
                    {title.substring(0, 40)}
                    {title.length > 40 && <p>...</p>}
                  </a>
                </Link>
              </div>
            </div>
            <p className="font-semibold">{body.substring(0, 500)}...</p>
            <p>
              <button className="bg-black text-white font-bold px-1 rounded">
                <a>
                  <Link href={`/articles/${slug}`}>Read more</Link>
                </a>
              </button>
            </p>
          </blockquote>
          <figcaption className="font-thin">
            <div className="text-cyan 600">{author.username}</div>
            <div className="text-cyan 600">{date} &#8226; 3 min read</div>
          </figcaption>
        </div>
        {/* <img
              className="w-24 h-24 object-cover ml-auto"
              src={`${process.env.NEXT_PUBLIC_API_URL}${image?.url}`}
            ></img> */}
      </figure>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
}

export default ProfileArticleCard;
