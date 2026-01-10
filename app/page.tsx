import Image from "next/image";
import Container from "./Components/container";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-neutral-200 ">
      <Container>
        <h1 className="text-primary w-full text-2xl font-semibold md:text-3xl">
          Sayan's Portfolio
        </h1>
        
          <p className="text-secondry text-md mt-4 tracking-tight w-2xl">
            Hello there I am a Software Engineer with passion for building
            scalable apps and efficient system.I also my share projects,
            experiments, and notes on building thoughtful software products
            here.
          </p>
 
      </Container>
    </div>
  );
}
