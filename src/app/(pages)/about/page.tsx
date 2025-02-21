import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col gap-2 animate-in fade-in-20 ease-out duration-700">
      <p>About</p>
      <Button asChild variant="default">
        <Link href="/" rel="noopener noreferrer" className="pl-2">
          <ChevronLeft /> Back
        </Link>
      </Button>
    </div>
  );
}
