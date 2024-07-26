import Image from "next/image";
import { rock_salt } from "@/app/font";
export default function Contact() {
  return (
    <section className=" text-center fixed inset-x-0 mx-auto z-0 bottom-0 ">
      <div id='contact' className="bg-white justify-center items-center m-16 mb-8 px-16  md:mx-40 lg:mx-60 xl:mx-96 pt-8 sm:py-8 pb-0 sm:flex ">
        <p className=" text-xl 2xl:text-2xl z-20 "><span className={`${rock_salt.className}`}>Thank you</span> for reading my portfolio.<br/>If you want to reach me, send me a message.</p>
    
        <Image
        className="w-fit  mx-auto xl:w-2/6"
          unoptimized
          src="/animation.gif"
          height={600}
          width={600}
          alt="Tech Circle"
        />
      </div>

      <p className={`${rock_salt.className} pb-1 text-white`}>
        Designed and build by David Josipović
      </p>
    </section>
  );
}
