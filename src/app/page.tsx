"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Player from "@/components/lottie-player";
import TransitionHelper from "@/components/transition-helper";

export default function Home() {
  return (
    <>
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
          <TransitionHelper url="/about">
            <Button
              variant="default"
              size="lg"
              className="w-fit cursor-pointer"
            >
              About me
            </Button>
          </TransitionHelper>
          <TransitionHelper url="/case-studies">
            <Button
              variant="secondary"
              size="lg"
              className="w-fit cursor-pointer"
            >
              Case studies
            </Button>
          </TransitionHelper>
        </div>
      </div>
      <div className="flex grow md:max-w-sm lg:h-[400px]">
        <Player />
      </div>
    </>
  );
}
