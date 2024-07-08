import Image from "next/image";
export default function Projects() {
  return (
    <section className="px-12 py-20 z-10 relative mb-[500px] bg-teal-500">
      <h1 className=" text-4xl font-bold leading-normal pb-4">my projects</h1>
      <div className="flex flex-col gap-4"><Image
        src="/mygamelist_banner.svg"
        height={600}
        width={600}
        alt="Tech Circle"
      />
      <Image
        src="/germansyllablesplitter_banner.svg"
        height={600}
        width={600}
        alt="Tech Circle"
      />
      <Image
        src="/inprogress_banner.svg"
        height={600}
        width={600}
        alt="Tech Circle"
      /></div>
      
    </section>
  );
}
