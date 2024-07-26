import Image from "next/image";
export default function Projects() {
  return (
    <section className="px-12 py-20 z-10 relative mb-[500px] bg-light-blue">
      <div className="container mx-auto">
        <h1 id="projects" className="text-4xl text-dark-blue font-bold leading-normal pb-4 sm:text-center">
          my projects
        </h1>
        <div className="flex flex-col xl:flex-row gap-4 sm:items-center">
          <Image
            src="/mygamelist_banner.svg"
            height={600}
            width={600}
            alt="Tech Circle"
            className="sm:w-2/3 md:w-1/2 hover:transform hover:scale-105 hover:shadow-lg transition duration-300"
          />
          <Image
            src="/germansyllablesplitter_banner.svg"
            height={600}
            width={600}
            alt="Tech Circle"
            className="sm:w-2/3 md:w-1/2 hover:transform hover:scale-105 hover:shadow-lg transition duration-300"
          />
          <Image
            src="/inprogress_banner.svg"
            height={600}
            width={600}
            alt="Tech Circle"
            className="sm:w-2/3 md:w-1/2 hover:transform hover:scale-105 hover:shadow-lg transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
