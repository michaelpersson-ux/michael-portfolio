"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TransitionContext from "@/components/transition-context";

interface TransitionHelperProps {
  url: string;
  children: React.ReactNode;
}

export default function TransitionHelper({
  url,
  children,
}: TransitionHelperProps) {
  const transition = useContext(TransitionContext);
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (transition.transitioning === false) {
      transition.setTransitioning(true);
      const href = event.currentTarget.getAttribute("href") || "/";
      setTimeout(() => {
        router.push(href);
        transition.setTransitioning(false);
      }, 900);
    }
  }

  return (
    <Link href={url} onClick={handleClick} rel="noopener noreferrer">
      {children}
    </Link>
  );
}
