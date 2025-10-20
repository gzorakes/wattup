import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="max-w-64 sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl bg-background mx-auto rounded-4xl p-2 md:p-4 shadow-[0px_0px_4px_#0b1c48] relative z-10 flex items-center justify-between">
      <div className="relative h-8 w-32">
        <Image src="/logo.png" fill className="object-contain " alt="logo" />
      </div>
    </nav>
  );
}
