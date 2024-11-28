import Source from "@/types/source";
import SourceCard from "./SourceCard";
import React from "react";
interface props {
    sources: Source[]
}

const SourceCardContainer: React.FC<props> = ({ sources }) => {
  return (
    <div className="source-cards grid gap-8 grid-cols-1 xl:grid-cols-3 sm:grid-cols-2">
      {sources.map((source: Source, i: number) => {
        return <SourceCard sourceInfo={source} key={source.name + i} />;
      })}
    </div>
  );
};

export default SourceCardContainer;