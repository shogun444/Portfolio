"use client"
import Image from "next/image";
import Container from "../Components/container";
import AnimatedText from "../Components/Animations/AnimatedText";
import {motion} from "motion/react"
import Link from "next/link";

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
  return (
   
      <Container className="px-7 pt-21">
        <AnimatedText text="I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. With expertise in full-stack development, I enjoy building user-centric applications that make a difference." heading="Projects"></AnimatedText>
       

       <motion.div
      initial={{
            y:10
          }}
          animate={{
            y:0
          }}
      className="mx-auto grid grid-cols-3  w-full gap-5 py-5">
        {Projects.map((itm) => (
          <motion.div
          
            className="group h-105 w-65 mx-auto rounded-xl py-2 transition duration-200 hover:scale-[1.01] hover:shadow-sm "
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
               filter: "blur(0px)",
            }}
            transition={{
              delay: itm.id * 0.06,
              ease: "easeInOut",
            }}
            key={itm.id}
          >
            <Link href={itm.link}>
              <div className="p-2 ">
                
                <div className="flex gap-1 justify-end"><h1  className="h-2 w-2    rounded-full bg-[#FF605C]"></h1>
                <h1  className="h-2 w-2    rounded-full bg-[#FFBD44]"></h1>
                <h1  className="h-2 w-2     rounded-full bg-[#00CA4E]"></h1></div>
                
                <Image
                  className="relative h-50 w-100 pt-1 rounded-b-lg  transition duration-200"
                  src={itm.thumbnail}
                  width={200}
                  height={400}
                  alt={itm.thumbnail}
                ></Image>
              </div>

              <motion.div className="w-56 transition-all duration-300 group-hover:mx-2">
                <h1 className="my-2  font-semibold text-neutral-500 tracking-tight">
                  {itm.title}
                </h1>
                <p className="pb-5 text-sm  text-neutral-500">
                  {itm.description}
                </p>
              </motion.div>
              <div className="flex items-center transition-all duration-300 group-hover:mx-2">
                {itm.Tools.map((itm) => (
                  <motion.div 
                  initial="rest"
                    whileHover="visible"
                    variants={{
                      rest : {width : 27},
                      visible : {width : 96}
                    }}
                    transition={{
                       
                      duration: 0.001,
                      ease: 'easeInOut',
                    }}
                    key={itm.name}
                    className="group/item transition-all duration-500 flex items-center rounded-full bg-neutral-200 overflow-hidden"
                  >
                    <Image
                      className="h-6 w-6 rounded-full p-1"
                      src={itm.src}
                      alt={itm.src}
                      width={1}
                      height={1}
                    ></Image>{" "}
                    <motion.h1
                     
                      transition={{
                       
                        ease: 'easeInOut',
                        duration: 0.3,
                      }}
                      className="text-neutral-200 group-hover/item:text-neutral-500  group-hover/item:flex  transition-all duration-75 text-[11px]  whitespace-nowrap "
                    >
                      {itm.name}
                    </motion.h1>
                  </motion.div>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      </Container>
   
  );
}
