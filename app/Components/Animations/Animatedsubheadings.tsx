"use client"
import {motion} from "motion/react"
export default function AnimatedSubheading({children} : {children:React.ReactNode}){
  return(<>
  <motion.p
  initial={{
    filter:"blur(6px)",
    y:40
  }}
  animate={{
    filter:"blur(0px)",
    y:0
  }}
  className="text-secondary text-md text-md mt-2 w-2xl tracking-tight">{children}</motion.p>
  </>)
}