import Link from 'next/link';

function SmallArticleCard({
  post: { title, image, slug, category, author, published_at },
}) {
  const stringDate = JSON.stringify(published_at);
  const sepDate = stringDate.split('T');
  const newDate = sepDate[0].split('-');
  const day = newDate[2];
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
                <div className="text-cyan 600">
                  {day}. {corrMonth} &#8226; 3 min read
                </div>
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
