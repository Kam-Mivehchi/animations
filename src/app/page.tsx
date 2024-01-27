import Image from 'next/image';
import StickyNav from '@/components/sticky-nav';
export default function Home() {
  return (
    <main className=" min-h-[500vh]">
      <StickyNav />
      <Hero />
      <Hero />
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <section className="min-h-screen grid place-content-center">
      <div className="">
        <h1 className="text-5xl font-bold ">Hero</h1>
      </div>
    </section>
  );
}
