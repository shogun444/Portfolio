import Image from "next/image";
import Container from "./Components/container";
import Navbar from "./Components/navbar/navbar";
import Projects from "./Components/Projects/projects";
import LandingBlogs from "./Components/LandingBlogs/landing-blogs";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-neutral-200">
      <Container className="px-7">
        <h1 className="text-primary w-full pt-21 text-2xl font-semibold md:text-3xl">
          Sayan's Portfolio
        </h1>

        <p className="text-secondary text-md mt-2 w-2xl text-sm tracking-tight">
          Hello there I am a Software Engineer with passion for building
          scalable apps and efficient system.I also my share projects,
          experiments, and notes on building thoughtful software products here.
        </p>
        <Projects />
        <LandingBlogs />
      </Container>
    </div>
  );
}
