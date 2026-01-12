import Container from "@/app/Components/container";
import { Metadata } from "next";
import Image from "next/image";
import {  GetBlogs } from "./utils/mdx";
import {Link} from "next-view-transitions";

export const metadata: Metadata = {
  title: "All Blogs - Sayandip",
  description: "A take on my journey.",
};

export default async function BlogPage() {
  const allBlogs = await GetBlogs();
  if (!allBlogs) return <h1>Sorry No Blogs</h1>;
  return (
    <div className="h-screen  ">
      <div className="leading-0 pt-5">
         <h1 className="text-primary w-full text-2xl font-bold md:text-4xl leading-5">
        All Blogs
      </h1>
      <p className="text-secondary w-fit rounded-md text-md ">
        Hello! Here are some of my learnings!
      </p>
      </div>
     
      <div className="h-160 ">
        {allBlogs.map((itm) => (
          <Link href={`blogs/${itm.slug}`}
            className="flex  justify-between no-underline "
            key={itm.title}
          >
            <div className="">
              <p className="text-primary w-full text-md font-bold md:text-lg  mb-px leading-0">
                {itm.title}
              </p>
              <p className="text-secondary text-md w-xl  text-sm font-normal   ">
                {itm.description}
              </p>
            </div>
            <p className="text-secondary text-xs  py-8 ">
              {itm.date}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
