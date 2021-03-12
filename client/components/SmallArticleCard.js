import Link from 'next/link';
import moment from 'moment';

function SmallArticleCard({
  post: { title, image, slug, author, published_at },
}) {
  const date = moment(published_at).locale('nb').format('ll');

  return (
    <>
      <Link href={`/articles/${slug}`}>
        <a>
          <figure className="flex">
            <div className="text-left">
              <blockquote>
                <p className="font-semibold">
                  {title.substring(0, 40)}
                  {title.length > 40 && <p>...</p>}
                </p>
              </blockquote>
              <figcaption className="font-thin">
                <div className="text-cyan 600">{author.username}</div>
                <div className="text-cyan 600">{date} &#8226; 3 min read</div>
              </figcaption>
            </div>
            <img
              className="w-24 h-24 object-cover ml-auto"
              src={`${process.env.NEXT_PUBLIC_API_URL}${image?.url}`}
            ></img>
          </figure>
        </a>
      </Link>
    </>
  );
}

export default SmallArticleCard;
