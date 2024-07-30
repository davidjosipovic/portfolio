"use client";
import Image from "next/image";
import { rock_salt } from "@/app/font";
import Link from "next/link";
export default function Contact() {
  return (
    <section className=" text-center fixed inset-x-0 mx-auto z-0 bottom-0 ">
      <div
        id="contact"
        className="bg-white  rounded-3xl justify-center items-center m-16 mb-8 px-8  md:mx-40 lg:mx-60 xl:mx-96 pt-8 sm:py-8 pb-0 sm:flex "
      >
        <div className="flex flex-col mx-auto">
          <p className=" text-md 2xl:text-2xl z-20 ">
            <span className={`${rock_salt.className}`}>Thank you</span> for
            reading my portfolio.
            <br />
            If you want to reach me, send me a
          </p>
          <div className="flex gap-4 xl:gap-16 justify-center  h-10 pt-1">
            <Link target="_blank" href={"https://github.com/davidjosipovic"}>
              <Image
                src="/github-mark.png"
                alt="GitHub"
                width={40}
                height={40}
                className=" hover:scale-125  w-10 h-10  transition duration-300 hover:shadow-lg"
              />
            </Link>

            <p className="text-md 2xl:text-2xl z-20"> message.</p>
            <Link target="_blank" href={"https://www.linkedin.com/in/david-josipovi%C4%87-84a379203/"}>
              <Image
                src="/LI-In-Bug.png"
                alt="Linkedin"
                width={40}
                height={40}
                className="hover:scale-125 w-10 h-10  transition duration-300 hover:shadow-lg"
              />
            </Link>
          </div>
        </div>

        <Image
          className=" w-2/3 max-w-40 sm:max-w-none sm:w-1/3  mx-auto py-4"
          unoptimized
          src="/cat_smashing.gif"
          height={500}
          width={500}
          alt="Tech Circle"
        />
      </div>

      <p className={`${rock_salt.className} pb-1 text-xs text text-white`}>
        Designed and build by David Josipović
      </p>
    </section>
  );
}
