import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useLoading } from "@/components/top-loader/LoadingContext";
import SourceCard from "@/components/cards/SourceCard";
import sources from "@/data/Sources";
import { Input } from "@/components/ui/input";
import SourceCardContainer from "@/components/cards/SourceCardContainer";
import { Search } from "lucide-react";
import SearchBar from "@/components/searchBar";
import PaginationBar from "@/components/paginationBar";

export default function BrowsePage() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { toast } = useToast();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
  }, [startLoading]);

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900">
      <div className="w-full max-w-6xl space-y-8">
        {/* Title Section */}
        <div className="title-container mb-6 text-center">
          <h1 className="text-4xl font-semibold text-white text-left">
            Browse Collections
          </h1>
        </div>

        <SearchBar />
        {/* Source Cards */}
        <SourceCardContainer sources={sources} />
        <PaginationBar numPages={10}/>
      </div>
    </div>
  );
}
