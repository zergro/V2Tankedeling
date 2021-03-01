import Link from 'next/link';

function BigArticleCard({
  post: { title, image, slug, category, author, published_at },
}) {
  const stringDate = JSON.stringify(published_at);
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
                <div className="text-cyan 600">
                  {day}. {corrMonth} &#8226; 3 min read
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
