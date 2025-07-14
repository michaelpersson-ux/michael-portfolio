import { Button } from "@/components/ui/button";
import TransitionHelper from "@/components/transition-helper";
import { ChevronLeft } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="flex grow basis-1 flex-col gap-8">
        <p className="text-2xl max-w-2xl">
          I&apos;m a Trondheim-based <b>UX engineer</b> passionate about
          creating beautiful and functional user experiences.
        </p>
        <div className="flex gap-2">
          <TransitionHelper url="/">
            <Button
              variant="default"
              size="lg"
              className="w-fit cursor-pointer"
            >
              Return
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
    </>
  );
}
