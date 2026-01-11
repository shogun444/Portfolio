"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import { motion } from "motion/react";
export default function Projects() {
  const Projects = [
    {
      id: 1,
      title: "Music Streaming Application",
      description: "Stream music, build playlists, and discover new tracks.",
      thumbnail: "/Muzer.jpeg",
      stack: "",
      link: "https://muzer-taupe.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Application with Download Feature.",
      description:
        "Watch and download movies with fast, high-quality streaming.",
      thumbnail: "/Cineverse.jpeg",
      stack: "",

      link: "https://v0-code131111-nf.vercel.app/",
    },
    {
      id: 3,
      title: "AI Powered Resume Builder",
      description:
        "Create tailored resumes with AI and ATS-friendly formatting.",
      thumbnail: "/Resume.jpeg",
      stack: "",

      link: "https://resume-builder-ai-one.vercel.app/",
    },
  ];
  return (
    <div>
      <h1 className="text-primary mt-5 w-full text-2xl font-semibold md:text-2xl">
        Projects
      </h1>
      <p className="text-secondary md:text-md mt-2 max-w-2xl text-sm tracking-tight">
        I love building web apps here are some of my projects.
      </p>
      <div className="mx-auto grid h-150 w-full grid-cols-2 gap-5 py-5">
        {Projects.map((itm) => (
          <motion.div
            className="rounded-xl shadow-sm hover:scale-[1.01] transition duration-200"
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            whileInView={{
              filter: "blur(0px)",
            }}
            transition={{
              delay: itm.id * 0.06,
              ease: "easeInOut",
            }}
            key={itm.id}
          >
            <Link href={itm.link}>
              <Image
                className="h-50 relative  transition duration-200 w-full rounded-t-xl"
                src={itm.thumbnail}
                width={200}
                height={400}
                alt={itm.thumbnail}
              ></Image>
              <h1 className=" text-neutral-500 p-2 font-semibold">{itm.title}</h1>
              <p className="text-neutral-600 px-2 pb-5 text-xs">
                {itm.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
