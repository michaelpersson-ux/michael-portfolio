"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TransitionHelper from "@/components/transition-helper";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft } from "lucide-react";
import data from "@/data/case-studies.json";

export default function CaseStudies() {
  const [itemsPerPage] = React.useState(4);
  const [filteredData, setFilteredData] = React.useState(
    data.slice(1, itemsPerPage + 1) // Start from index 1 to skip the first item (index 0) if needed
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(
    Math.ceil(data.length / itemsPerPage)
  );

  const paginateTo = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredData(data.slice(startIndex, endIndex));
    setCurrentPage(page);
  };

  React.useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div className="flex grow basis-1 flex-col gap-8">
      <div className="flex flex-row items-center gap-6">
        <p className="text-3xl lg:text-5xl italic">Case studies</p>
        <div>
          <Badge className="bg-teal-600">Work in progress</Badge>
        </div>
      </div>
      <TransitionHelper url="/">
        <Button variant="default" size="lg" className="w-fit cursor-pointer">
          <ChevronLeft className="w-4 h-4" />
          Return
        </Button>
      </TransitionHelper>
      <div className="flex flex-wrap gap-3">
        {filteredData.map((caseStudy) => (
          <div
            key={Math.random()}
            className="flex grow lg:min-w-md animate-m-enter opacity-0"
            style={{
              // Stagger card entry animation
              animationDelay: `${
                caseStudy.id * 100 -
                (currentPage > 1 ? (currentPage - 1) * (itemsPerPage * 100) : 0)
              }ms`,
            }}
          >
            <Card className="w-full" key={caseStudy.id}>
              <CardHeader>
                <div className="flex flex-row justify-between mb-2">
                  <CardTitle className="text-2xl font-bold">
                    {caseStudy.title}
                  </CardTitle>
                  <div>
                    <Badge className="bg-teal-600">{caseStudy.badge}</Badge>
                  </div>
                </div>
                <CardDescription className="text-lg font-light">
                  {caseStudy.description}
                </CardDescription>
              </CardHeader>
              <div className="px-5">
                <Separator />
              </div>
              <CardFooter className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {caseStudy.startdate}
                </p>
                <p className="text-sm text-muted-foreground">
                  {caseStudy.enddate}
                </p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                currentPage === 1
                  ? "opacity-10 cursor-default"
                  : "cursor-pointer"
              }
              onClick={() => {
                if (currentPage > 1) {
                  paginateTo(currentPage - 1);
                }
              }}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                className="cursor-pointer"
                isActive={currentPage === i + 1}
                onClick={() => paginateTo(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages > 5 && currentPage < totalPages - 1 && (
            <PaginationEllipsis />
          )}
          <PaginationItem>
            <PaginationNext
              className={
                currentPage === totalPages
                  ? "opacity-10 cursor-default"
                  : "cursor-pointer"
              }
              onClick={() => {
                if (currentPage != totalPages) {
                  paginateTo(currentPage + 1);
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
