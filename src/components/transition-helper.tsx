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
      // Prevent multiple calls if already transitioning
      return;
    }
    transition.setTransitioning(true);
    const waitForTransitionEnd = new Promise<void>((resolve) => {
      const transitionContainer = document.getElementById(
        "transition-container"
      );
      if (!transitionContainer) {
        console.warn("Transition container not found.");
        resolve();
        router.push(href);
        return;
      }
      const onTransitionEnd = (event: TransitionEvent) => {
        transitionContainer.removeEventListener(
          "transitionend",
          onTransitionEnd
        );
        resolve();
      };
      transitionContainer.addEventListener("transitionend", onTransitionEnd);
    });

    await waitForTransitionEnd;
    router.push(href);
    transition.setTransitioning(false);
  }

  return (
    <Link href={url} onClick={handleClick} rel="noopener noreferrer">
      {children}
    </Link>
  );
}
