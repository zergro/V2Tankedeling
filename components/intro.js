import { SITE_TITLE, SITE_URL } from "../lib/constants";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h4 className="md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Articles. 
        <Link href="/newPost">
          <a className="hover:underline">Create New Article</a>
        </Link>        
      </h4>
    </section>
  );
}
