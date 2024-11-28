import React, { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useLoading } from "@/components/top-loader/LoadingContext";
import SourceCard from "@/components/cards/SourceCard";
import sources from "@/data/Sources"
import SourceCardContainer from "@/components/cards/SourceCardContainer";
export default function HomePage() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const { toast } = useToast();
  const { startLoading, stopLoading } = useLoading();



  useEffect(() => {
    //startLoading();
  }, [startLoading]);

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900">
      <div className="w-full max-w-6xl space-y-8">
        {/* Title Section */}
        <div className="title-container mb-6 text-center">
          <h1 className="text-4xl font-semibold text-white text-left">
            Community Favorites
          </h1>
        </div>

        {/* Source Cards */}
        <SourceCardContainer sources={sources}/>
      </div>
    </div>
  );
}
