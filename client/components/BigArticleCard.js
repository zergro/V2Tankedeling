import Link from 'next/link';

function BigArticleCard({ post: { title, image, slug, category, author } }) {
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
                <p className="text-lg font-semibold">{title}</p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan 600">
                  {author.username} #{category.CategoryName}
                </div>
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
