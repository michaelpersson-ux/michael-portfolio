import { Button } from "@/components/ui/button";
import TransitionHelper from "@/components/transition-helper"
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col gap-2 animate-in fade-in-20 ease-out duration-700">
      <p>Case studies</p>
       <TransitionHelper url="/">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-fit cursor-pointer"
                  >
                    Return
                  </Button>
                </TransitionHelper>
    </div>
  );
}
