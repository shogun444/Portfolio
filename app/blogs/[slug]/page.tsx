
import Container from "@/app/Components/container";
import { Metadata } from "next";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import singleBlog, { GetFrontMatter } from "../utils/mdx";
import { redirect } from "next/navigation";



export async function generateMetadata({params} : {params : Promise<{
  slug : string
}>}) {
  const {slug} = await params
  console.log(slug)
  const title = await GetFrontMatter(slug)
  if(!title) return {
    title : "No Blogs Found"
  }
  else return {title : title.title + "Sayan's Portfolio",
    description : title.description
  }
};


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
