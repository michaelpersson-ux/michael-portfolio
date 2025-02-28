"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Player from "@/components/lottie-player";

export default function Home() {
  const [transitioning, setTransitioning] = React.useState(false);
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTransitioning(true);
    const href = event.currentTarget.getAttribute("href") || "/";
    setTimeout(() => {
      router.push(href);
    }, 900);
  }

  return (
    <div
      className={
        "flex grow flex-col md:flex-row justify-start md:justify-center items-center min-h-0 md:min-h-[calc(100vh-80px)] gap-6 pt-8 md:pt-0 px-8" +
        (transitioning
          ? " animate-out fade-out-0 linear-ease duration-1000"
          : " animate-m-enter")
      }
    >
      <div className="flex grow basis-1 flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-3xl lg:text-5xl italic">Hello, my name is</p>
          <p className="text-7xl font-bold">Michael Persson</p>
        </div>
        <p className="text-2xl max-w-2xl">
          I&apos;m a Trondheim-based <b>UX engineer</b> passionate about
          creating beautiful and functional user experiences.
        </p>
        <div className="flex gap-2">
          <Button asChild variant="default" size="lg" className="w-fit">
            <Link href="/about" onClick={handleClick} rel="noopener noreferrer">
              Profile
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-fit">
            <Link
              href="/case-studies"
              onClick={handleClick}
              rel="noopener noreferrer"
            >
              Case studies
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex grow md:max-w-sm lg:h-[400px]">
        <Player />
      </div>
    </div>
  );
}
