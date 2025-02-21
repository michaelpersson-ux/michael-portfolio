"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Player from "@/components/lottie-player";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-start md:justify-center items-center min-h-0 md:min-h-[calc(100vh-80px)] gap-6 pt-8 md:pt-0 animate-in fade-in-0 px-8 linear-ease duration-1000">
      <div className="flex grow basis-1 flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-3xl lg:text-5xl italic">Hello, my name is</p>
          <p className="text-7xl font-bold">Michael Persson</p>
        </div>
        <p className="text-2xl max-w-2xl">
          I&apos;m a Trondheim-based <b>UX engineer</b> passionate about
          creating beautiful and functional user experiences.
        </p>
        <Button asChild variant="default" size="lg" className="w-fit">
          <Link href="/about" rel="noopener noreferrer">
            About me
          </Link>
        </Button>
      </div>
      <div className="flex grow max-w-[200px] md:max-w-sm basis-1">
        <Player />
      </div>
    </div>
  );
}
