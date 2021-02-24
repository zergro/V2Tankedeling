import Link from 'next/link';

function PostCard({ post: { title, body, image, slug, } }) {
  return (
    <>

      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img className="w-full" src={`${process.env.NEXT_PUBLIC_API_URL}${image?.url}`} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-grey-darker text-base">
            {body}
          </p>
          <Link href={`/posts/${slug}`}>
            <a>Read more</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PostCard;