import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a>
        <div>
          <div>
            <Image image={article.image} />
          </div>
          <div>
            <h2>
              {article.title.name}
            </h2>
            <p>
              {article.body}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
