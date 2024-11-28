import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SourceCard from "@/components/cards/SourceCard";
import sources from "@/data/Sources";
import SeeAllGames from "@/components/Modals/SeeAllGames";


const mockComments = [
  { 
    id: "comment1",
    user: "User1", 
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime nisi quam unde, amet mollitia quisquam eos eius iste eligendi possimus dolor iure adipisci dolorum similique? Inventore qui recusandae illum! Commodi inventore consequatur natus expedita. Consequuntur atque voluptate ipsa quaerat ut aut veritatis. Officiis in laborum accusantium error asperiores, voluptate ipsum quasi eum dolorum commodi ipsa et cumque officia tenetur.",
    date: "10:30 pm"
  },
];

const source = sources[0];

const SourcePage = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(mockComments);

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    const time = new Date().toISOString
    setComments([
      ...comments,
      {
        id: `comment${comments.length + 1}`,
        user: "You",
        text: newComment,
        date: time,
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      {/* SourceCard Component */}
      <SourceCard sourceInfo={source} linkPage={false} />

      {/* Games Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {source.games.slice(0, 3).map((game) => (
            <div
              key={game}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold">{game}</h3>
            </div>
          ))}
          <SeeAllGames games={source.games} />
        </div>
      </div>
      {/* Comments Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form onSubmit={(e) => handleAddComment(e)} className="flex gap-4 mb-4">
          <Input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Submit</Button>
        </form>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between">
                <h4 className="text-lg font-medium">{comment.user}</h4>
                <span>{comment.date}</span>
              </div>
              <p className="text-gray-400">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourcePage;
