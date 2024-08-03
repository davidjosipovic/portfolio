'use client'
import { rock_salt } from "@/app/font";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Hero() {
  return (
    <section className="px-8 py-16 pt-28 z-10 relative bg-light-blue ">
      <div className="container mx-auto md:py-20 lg:px-40 lg:py-32">
        <h1
          id="hero"
          className=" text-4xl font-bold text-dark-blue leading-normal"
        >
          <span className={`${rock_salt.className} text-white block`}>
            Hello!
          </span>{" "}
          My name is David Josipović.
        </h1>
        <p className="text-xl text-black pb-4 pt-2 ">
        I am a web developer based in <span className="text-white">Croatia</span> with a passion for designing{" "}
          web apps, dynamic websites, and interactive user interfaces.
        </p>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-100} // Adjust this value as needed
        >
          <button className="bg-dark-blue border-2 text-white px-4 py-2 rounded-xl text-lg  transition duration-300 hover:scale-105 hover:shadow-lg">
            Look at my projects
          </button>
        </Link>
      </div>
    </section>
  );
}
