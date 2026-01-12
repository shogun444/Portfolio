"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import { easeInOut, hover, motion } from "motion/react";
import { useState } from "react";
export default function Projects() {
  const Projects = [
    {
      id: 1,
      title: "Music Streaming Application",
      description: "Stream music, build playlists, and discover new tracks.",
      thumbnail: "/Muzer.jpeg",
      stack: "",
      link: "https://muzer-taupe.vercel.app/",
      Tools: [
        { name: "Next JS", src: "./next.svg" },
        { name: "Prisma", src: "./prisma.svg" },
        { name: "Tailwind CSS", src: "./tailwind.svg" },
      ],
    },
    {
      id: 2,
      title: "Movie Application",
      description:
        "Watch and download movies with fast, high-quality with download feature.",
      thumbnail: "/Cineverse.jpeg",
      stack: "",

      link: "https://v0-code131111-nf.vercel.app/",
      Tools: [
        { name: "Next JS", src: "./next.svg" },
        { name: "Prisma", src: "./prisma.svg" },
        { name: "Tailwind CSS", src: "./tailwind.svg" },
        {
          name: "Nodejs",
          src: "./node.svg",
        },
      ],
    },
    {
      id: 3,
      title: "AI Powered Resume Builder",
      description:
        "Create tailored resumes with AI and ATS-friendly formatting.",
      thumbnail: "/Resume.jpeg",
      stack: "",
      Tools: [
        { name: "Next JS", src: "./next.svg" },
        { name: "Prisma", src: "./prisma.svg" },
        { name: "Tailwind CSS", src: "./tailwind.svg" },
      ],
      link: "https://resume-builder-ai-one.vercel.app/",
    },
  ];

  const [size, setSize] = useState(false);

  return (
    <div >
      <h1 className="text-neutral-600 shadow-sm rounded-md mt-5 w-fit p-2 text-sm font-medium md:text-md">
        Projects
      </h1>
      
      <div className="mx-auto flex w-full gap-5 py-5">
        {Projects.map((itm) => (
          <motion.div
            className="group mx-auto rounded-xl py-2 transition duration-200 hover:scale-[1.01] hover:shadow-sm"
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
              <div className="p-2">
                <Image
                  className="relative h-50 w-100 rounded-2xl rounded-t-xl transition duration-200"
                  src={itm.thumbnail}
                  width={200}
                  height={400}
                  alt={itm.thumbnail}
                ></Image>
              </div>

              <motion.div className="transition-all duration-300 group-hover:px-2">
                <h1 className="my-2 font-semibold text-neutral-500">
                  {itm.title}
                </h1>
                <p className="pb-5 text-xs font-medium text-neutral-500">
                  {itm.description}
                </p>
              </motion.div>
              <div className="flex items-center transition-all duration-300 group-hover:mx-2">
                {itm.Tools.map((itm) => (
                  <motion.div
                  initial={{
                    width:27
                  }}
                    whileHover={{
                      width : 96
                    }}
                    transition={{
                      duration: 0.3,
                      ease: easeInOut,
                    }}
                    key={itm.name}
                    className="group/item flex items-center rounded-full bg-neutral-200 "
                  >
                    <Image
                      className="h-6 w-6 rounded-full p-1"
                      src={itm.src}
                      alt={itm.src}
                      width={1}
                      height={1}
                    ></Image>{" "}
                    <motion.h1
                      initial={{
                        opacity:0
                      }}
                      animate={{
                        opacity:1
                      }}
                      transition={{
                        ease: easeInOut,
                        duration: 0.3,
                      }}
                      className="hidden group-hover/item:flex text-[11px] text-neutral-600 whitespace-nowrap "
                    >
                      {itm.name}
                    </motion.h1>
                  </motion.div>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
