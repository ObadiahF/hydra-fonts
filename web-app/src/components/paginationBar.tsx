import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  numPages: number;
}

const PaginationBar: React.FC<Props> = ({ numPages }) => {
  const [currPage, setCurrPage] = useState(0); // 0-based index for internal state
  const [searchParams, setSearchParams] = useSearchParams();
  const [visiblePages, setVisiblePages] = useState(5); // Default number of visible pages

  // Update visible pages based on window size
  useEffect(() => {
    const updateVisiblePages = () => {
      if (window.innerWidth < 768) {
        setVisiblePages(3); // Show 3 pages on smaller screens
      } else if (window.innerWidth < 1024) {
        setVisiblePages(5); // Show 5 pages on medium screens
      } else {
        setVisiblePages(7); // Show 7 pages on larger screens
      }
    };

    updateVisiblePages(); // Call on mount
    window.addEventListener("resize", updateVisiblePages);

    return () => {
      window.removeEventListener("resize", updateVisiblePages);
    };
  }, []);

  // Update state when query parameter changes
  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1", 10) - 1; // Convert to 0-based index
    if (page >= 0 && page < numPages) {
      setCurrPage(page);
    }
  }, [searchParams, numPages]);

  // Function to update query parameters
  const updatePage = (page: number) => {
    setSearchParams({ page: (page + 1).toString() }); // Convert to 1-based index for URL
  };

  // Calculate range of visible pages
  const getPageRange = () => {
    const half = Math.floor(visiblePages / 2);
    let start = Math.max(currPage - half, 0);
    let end = start + visiblePages;

    if (end > numPages) {
      end = numPages;
      start = Math.max(end - visiblePages, 0);
    }

    return Array.from({ length: end - start }, (_, i) => start + i);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currPage > 0) updatePage(currPage - 1);
            }}
          />
        </PaginationItem>

        {/* Visible Pages */}
        {getPageRange().map((page) => (
          <PaginationItem
            key={page}
            className={currPage === page ? "bg-slate-500" : ""}
          >
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                updatePage(page);
              }}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis (if applicable) */}
        {currPage + visiblePages < numPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currPage < numPages - 1) updatePage(currPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBar;
