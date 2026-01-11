
import Container from "@/app/Components/container";
import { Metadata } from "next";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import singleBlog from "../utils/mdx";
import { redirect } from "next/navigation";


export default async function SingleBlogPage({params} : {params : Promise<{slug :string}>}) {

  const { slug } = await params
  const blogs = await singleBlog(slug)
 if(blogs === null) {
  redirect('/blogs')
 }
   
const {frontmatter , content} = blogs

  return (
    <div className=" h-screen w-full prose mx-auto">
      {content}
      
    </div>
  );
}
