import Link from 'next/link';
import moment from 'moment';

function BigArticleCard({
  post: { title, image, slug, author, published_at },
}) {
  const date = moment(published_at).locale('nb').format('ll');

  return (
    <>
      <Link href={`/articles/${slug}`}>
        <a>
          <figure className="">
            <img
              className="w-full"
              src={`${process.env.NEXT_PUBLIC_API_URL}${image?.url}`}
            ></img>
            <div className="pt-6 text-left space-y-4">
              <blockquote>
                <p className="text-lg font-semibold">
                  {title.substring(0, 40)}
                  {title.length > 40 && <p>...</p>}
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan 600">{author.username}</div>
                <div className="text-cyan 600">{date} &#8226; 3 min read</div>
                <div className="text-gray-500">
                  Freelance journalist in Norway
                </div>
              </figcaption>
            </div>
          </figure>
        </a>
      </Link>
    </>
  );
}

export default BigArticleCard;
