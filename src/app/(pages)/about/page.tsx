import { Button } from "@/components/ui/button";
import TransitionHelper from "@/components/transition-helper";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";

export default function About() {
  return (
    <>
      <div className="flex grow basis-1 flex-col gap-8">
        <div className="flex flex-row items-center gap-6">
          <p className="text-3xl lg:text-5xl italic">About me</p>
          <div>
            <Badge className="bg-teal-600">Work in progress</Badge>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <TransitionHelper url="/">
          <Button variant="default" size="lg" className="w-fit cursor-pointer">
            <ChevronLeft />
            Return
          </Button>
        </TransitionHelper>
      </div>
    </>
  );
}
