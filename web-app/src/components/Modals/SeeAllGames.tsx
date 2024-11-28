import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";

interface props {
    games: string[];
}

const SeeAllGames: React.FC<props> = ({ games }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-left text-blue-500">
          <span>See all games</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-900">
        <DialogHeader>
          <DialogTitle>All Games</DialogTitle>
        </DialogHeader>
        <div className="">
          {games.map((g) => {
            return <div key={g}>{g}</div>;
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SeeAllGames;
