import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full h-[860px] -mt-6">
      <Image src="/bg.jpg" alt="Hero background" fill className="object-cover rounded-4xl" />
    </section>
  );
}
