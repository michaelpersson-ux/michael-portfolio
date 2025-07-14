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

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href") || "/";
    if (window.location.pathname === href) {
      window.scrollTo(0, 0);
      return;
    }
    if (transition.transitioning) {
      // Prevent multiple calls if transition is already in progress
      return;
    }
    transition.setTransitioning(true);
    const waitForTransitionEnd = new Promise<void>((resolve) => {
      const transitionContainer = transition.container.current;
      if (!transitionContainer) {
        console.warn("Transition container not found.");
        resolve();
        router.push(href);
        return;
      }
      const onAnimationEnd = (event: AnimationEvent) => {
        transitionContainer.removeEventListener("animationend", onAnimationEnd);
        resolve();
      };
      transitionContainer.addEventListener("animationend", onAnimationEnd);
    });

    await waitForTransitionEnd;
    transition.setTransitioning(false);
    router.push(href);
  }

  return (
    <Link href={url} onClick={handleClick} rel="noopener noreferrer">
      {children}
    </Link>
  );
}
