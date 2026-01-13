"use client"

import {motion, useAnimate} from "motion/react"
interface animationtype{
  heading : React.ReactNode,
  text : React.ReactNode
}
export default function AnimatedText({heading,text}:animationtype){
  
 
  return(<div >
  <motion.h1  className="text-primary w-full text-2xl font-bold md:text-4xl " 
  initial={{
    opacity:0,
    filter:"blur(10px)",
    y:20
  }}
  animate={{
    opacity:1,
    filter:"blur(0px)",
    y:0
  }}
  transition={{
    ease : "easeInOut",
    duration : 0.3
  }}
  >
    {heading}
  </motion.h1>
  <motion.p 
   initial={{
    opacity:0,
    filter:"blur(6px)",
    y:10
  }}
  animate={{
    opacity:1,
    filter:"blur(0px)",
    y:0
  }}
  transition={{
    delay:0.2
  }}
  className="text-secondary text-md text-md mt-4 w-lg tracking-tight">

    {text}</motion.p>
  </div>)
}