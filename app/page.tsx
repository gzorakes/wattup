import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative mt-6 h-[860px] w-full">
        <Image
          src="/bg.png"
          alt="Hero background"
          fill
          className="rounded-4xl object-cover"
          sizes="(max-width: 640px) calc(100vw - 24px), (max-width: 1024px) calc(100vw - 32px), calc(min(100vw, 80rem) - 32px)"
        />
        <div className="bg-foreground/70 absolute inset-0 rounded-4xl"></div>
      </section>
    </main>
  );
}
