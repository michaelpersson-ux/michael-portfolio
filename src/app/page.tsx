"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left">
        <li className="mb-2">
          Get started by editing
          <code className="bg-black/[.05] dark:bg-white/[.0.2] px-1 py-0.5 rounded font-semibold ml-2">
            src/app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <Button asChild variant="default">
        <Link href="/about" rel="noopener noreferrer">
          About me
        </Link>
      </Button>
      <Button asChild variant="default">
        <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
        >
          Read our docs
        </Link>
      </Button>
    </div>
  );
}
