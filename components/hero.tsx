import { rock_salt } from "@/app/layout";

export default function Hero() {
    return (
      <section className="px-12 mt-20">
       
       <h1 className=" text-4xl font-bold leading-normal"><span className={`${rock_salt.className} block`}>Hello!</span> My name is David Josipović.</h1>
       <p className="text-xl pb-4 pt-2 ">I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building amazing products using Next.js.
       </p>
       <button className="bg-black text-white px-4 py-2 rounded-xl text-lg">Look at my projects</button>
      </section>
    );
  }
  