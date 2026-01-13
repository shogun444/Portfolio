import Container from "@/app/Components/container";
import { Metadata } from "next";
import Image from "next/image";
import {  GetBlogs } from "./utils/mdx";
import {Link} from "next-view-transitions";
import AnimatedText from "../Components/Animations/AnimatedText";

export const metadata: Metadata = {
  title: "All Blogs - Sayandip",
  description: "A take on my journey.",
};

export default async function BlogPage() {
  const allBlogs = await GetBlogs();
  if (!allBlogs) return <h1>Sorry No Blogs</h1>;
  return (
    <Container className="h-screen w-full px-7 pt-21">
    
        <AnimatedText heading="All Blogs" text=" Hello there I am a Software Engineer with passion for building
          scalable apps and efficient system."></AnimatedText>
        
     
     
      <div className="py-5 shadow-2xs " >
        {allBlogs.map((itm) => (
          <Link href={`blogs/${itm.slug}`}
            className="flex  justify-between no-underline "
            key={itm.title}
          >
            <div className="py-3">
             <p className="text-primary mb-px w-full  font-bold tracking-tight md:text-md">
                {itm.title}
              </p>
              <p className="text-secondary  w-lg text-sm   pt-2">
                {itm.description}
              </p>
            </div>
            <p className="text-secondary text-xs  py-8 ">
              {itm.date}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
