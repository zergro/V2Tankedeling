import Link from 'next/link';

function SmallArticleCard({ post: { title, image, slug, category, author } }) {
  return (
    <>
      <Link href={`/articles/${slug}`}>
        <a>
          <figure className="flex">
            <div className="text-left">
              <blockquote>
                <p className="font-semibold">{title.substring(0, 70)}...</p>
              </blockquote>
              <figcaption className="font-thin">
                <div className="text-cyan 600">
                  {author.username} #{category.CategoryName}
                </div>
                <div className="text-cyan 600">21. feb &#8226; 3 min read</div>
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
