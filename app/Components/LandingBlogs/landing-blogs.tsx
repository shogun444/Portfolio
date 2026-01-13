
import {Link, ViewTransitions} from "next-view-transitions";
import { GetBlogs } from "../../blogs/utils/mdx";

export default async function LandingBlogs() {
  const allBlogs = await GetBlogs();
  return (
    <>
      <h1 className="text-neutral-700 shadow-sm rounded-md w-fit flex items-center p-2 mt-5 text-md  md:text-md">
        Sharing things as i learn
      </h1>
      <div className=" py-5 space-y-5">
        {allBlogs.map((itm) => (
          <Link
            href={`blogs/${itm.slug}`}
            className="flex justify-between no-underline "
            key={itm.title}
          >
            <div >
              <p className="text-primary mb-px w-full  font-bold tracking-tight md:text-md">
                {itm.title}
              </p>
              <p className="text-secondary  w-lg text-sm   pt-2">
                {itm.description}
              </p>
            </div>
            <p className="text-secondary py-8 text-sm">{itm.date}</p>
          </Link>
        ))}
      </div>
   </>
  );
}
