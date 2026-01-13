import Image from "next/image";
import Container from "./Components/container";
import Navbar from "./Components/navbar/navbar";
import Projects from "./Components/Projects/projects";
import LandingBlogs from "./Components/LandingBlogs/landing-blogs";
import AnimatedText from "./Components/Animations/AnimatedText";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   
      <Container className="px-7 pt-21 min-h-screen w-full flex-col">
       <AnimatedText text=" Hello there I am a Software Engineer with passion for building
          scalable apps and efficient system." heading="Sayandip Roy"></AnimatedText>

       
        <div className="shadow-2xs ">
          <Projects />
        </div>
        <div className="shadow-2xs">
          <LandingBlogs />
        </div>
        <h1 className="md:text-md mt-5 w-fit rounded-md p-2 text-md font-medium text-neutral-600 shadow-sm">
          Get in touch{" "}
        </h1>
          <p className="text-secondary text-md tracking-tight mt-2 w-lg pt-5 ">
          I'm currently looking for new opportunities. Whether you have a
          question or want to say hi, hit that button.{" "}
        </p>
        <div className="relative flex items-center pt-5  pb-5">
          <input
            className="ring-neutral-400 focus:outline-none relative w-lg rounded-md border-neutral-100 px-2 py-3 text-[14px] shadow-sm focus:ring-2"
            type="text"
            placeholder="Your email"
          />{" "}
          <button className="absolute left-100 rounded-md bg-neutral-200 p-2 text-sm text-neutral-800">
            Send Enquiry
          </button>
        </div>

      </Container>
  
  );
}
