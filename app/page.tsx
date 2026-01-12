import Image from "next/image";
import Container from "./Components/container";
import Navbar from "./Components/navbar/navbar";
import Projects from "./Components/Projects/projects";
import LandingBlogs from "./Components/LandingBlogs/landing-blogs";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-neutral-200">
      <Container className="px-7">
        <h1 className="text-primary w-full pt-21 text-2xl font-bold md:text-4xl">
          Sayandip Roy
        </h1>

        <p className="text-secondary text-md text-md mt-2 w-2xl tracking-tight">
          Hello there I am a Software Engineer with passion for building
          scalable apps and efficient system.
        </p>
        <div className="shadow-2xs">
          <Projects />
        </div>
        <div className="shadow-2xs">
          <LandingBlogs />
        </div>
        <h1 className="md:text-md mt-5 w-fit rounded-md p-2 text-sm font-medium text-neutral-600 shadow-sm">
          Get in touch{" "}
        </h1>
        <p className="text-secondary text-md text-md mt-2 w-2xl pt-5 tracking-tight">
          I'm currently looking for new opportunities. Whether you have a
          question or want to say hi, hit that button.{" "}
        </p>
        <div className="relative flex items-center pt-5">
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
    </div>
  );
}
