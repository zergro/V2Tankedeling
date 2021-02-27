import Link from 'next/link';

function PostCard({ post: { title, body, image, slug } }) {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={`${process.env.NEXT_PUBLIC_API_URL}${image?.url}`}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p
            className="text-grey-darker text-base"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <Link href={`/articles/${slug}`}>
            <a>Read more</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PostCard;
