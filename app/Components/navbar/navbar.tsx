"use client";
import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
export default function Navbar() {
  const ref = useRef(null)
  const nav = [
    {
      name: "About",
      href: "#about",
      id: 1,
    },
    {
      name: "Projects",
      href: "#projects",
      id: 2,
    },
    {
      name: "Contact",
      href: "#contact",
      id: 3,
    },
    {
      name: "Blogs",
      href: "#blog",
      id: 4,
    },
  ];
  const [hover, setHover] = useState<number | null>(null);
  const [size,setSize] = useState(false)
  const {scrollYProgress} = useScroll()
  useMotionValueEvent(scrollYProgress,"change",(latest)=>{
   console.log(latest)
   if(latest>0){
setSize(true)
   }
   else setSize(false)
  })
  return (
    <Container>
      <div ref={ref}> 
      <motion.nav
      transition={{
        duration:1,
        ease : "easeInOut"
      }}
       className={`mx-auto flex  items-center justify-between  p-1 px-2 ${size ? "px-5 rounded-4xl bg-neutral-200 absolute inset-0  h-20 w-2/4 " : "w-full"} `}>
     
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={"/profile.png"}
          width={120}
          height={120}
          alt="profile"
        ></Image>
        {nav.map((itm) => (
          <div
            className="relative flex rounded-2xl p-2"
            key={itm.id}
            onMouseEnter={() => setHover(itm.id)}
            onMouseLeave={()=> null}
          >
            {hover === itm.id && (
              <motion.span
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                layoutId="follow"
                className="absolute inset-0 rounded-2xl bg-neutral-400"
              />
            )}

            <Link 
            className="z-1 " href={itm.href}>
              {itm.name}
            </Link>
          </div>
        ))}
      </motion.nav>
      </div>
    </Container>
  );
}
