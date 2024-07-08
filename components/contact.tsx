import Image from "next/image";
import { rock_salt } from "@/app/layout";
export default function Contact() {
  return (
    <section className=" text-center fixed z-0 bottom-0">
      <div className="bg-white m-16 mb-8 px-16 pt-8 pb-0 ">
        <p className=" text-xl"><span className={`${rock_salt.className}`}>Thank you</span> for reading my portfolio. </p>
        <p className="text-xl z-20">
          If you want to reach me, send me a message.
        </p>
        <Image
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
