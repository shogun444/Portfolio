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
    <div className="h-screen w-full flex-col px-5">
      <h1 className="text-primary w-full text-2xl font-semibold md:text-3xl">
        All Blogs
      </h1>
      <p className="text-secondary text-md w-2xl text-sm tracking-tight">
        Hello! Here are some of my learnings!
      </p>
      <div className="h-160 ">
        {allBlogs.map((itm) => (
          <Link href={`blogs/${itm.slug}`}
            className="flex  justify-between no-underline hover:shadow-2xs"
            key={itm.title}
          >
            <div className="">
              <p className="text-primary w-full text-2xl font-semibold md:text-3xl  mb-px">
                {itm.title}
              </p>
              <p className="text-secondary text-md w-xl  text-sm font-normal tracking-tight  ">
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
