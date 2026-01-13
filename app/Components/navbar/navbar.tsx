"use client";
import Link from "next/link";
import Container from "../container";
import Image from "next/image";
import {
  easeIn,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
export default function Navbar() {
  const ref = useRef(null);
  const nav = [
    
    {
      name: "Projects",
      href: "/projects",
      id: 2,
    },
    {
      name: "Contact",
      href: "/contact",
      id: 3,
    },
    {
      name: "Blogs",
      href: "/blogs",
      id: 4,
    },
  ];
  const [hover, setHover] = useState<number | null>(null);
  const [size, setSize] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress,[0,0.3],[0,10])
  const shrink = useTransform(scrollYProgress,[0,0.3],["55%","53%"])
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    if (latest > 0) {
      setSize(true);
    } else setSize(false);
  });
  return (
    
      <motion.div
      style={{
        boxShadow : size? "var(--shadow-nav)" : "none",
        width : shrink,
        y
      }}
        initial={{
          filter:"blur(1px)",
          width: "56rem"
        }}
        transition={{
          ease: easeInOut,
          duration: 0.25,
        }}
        animate={{
          opacity: 1,
          filter : "blur(0px)",
         
        }}
        className={`fixed top-3 left-1/2 p-px flex -translate-x-1/2 z-10 items-center justify-between rounded-xl px-2 bg-neutral-100`}
        ref={ref}
      >
        <Link href={'/'}> 
        <Image
          className="h-10 w-10 rounded-full object-cover"
          src={"/profile.png"}
          width={120}
          height={120}
          alt="profile"
         
        ></Image> </Link>
        <motion.nav className="flex items-center gap-1 z-1">
          {nav.map((itm) => (
            <div
              className="relative flex rounded-2xl p-2"
              key={itm.id}
              onMouseEnter={() => setHover(itm.id)}
              onMouseLeave={() => null}
            >
              {hover === itm.id && (
                <motion.span
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  layoutId="follow"
                  className="absolute inset-0 rounded-md bg-neutral-200"
                />
              )}

              <Link className="text-primary z-1 text-sm" href={itm.href}>
                {itm.name}
              </Link>
            </div>
          ))}
        </motion.nav>
      </motion.div>
    
  );
}
