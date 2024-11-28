import { MessageCircle, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import Source from "@/types/source";
import WidgetButton from "../buttons/WidgetButton";
import React from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

// Define the props interface for the SourceCard component
interface SourceCardProps {
  sourceInfo: Source;
  linkPage?: boolean;
}

// Correctly define the functional component
const SourceCard: React.FC<SourceCardProps> = ({ sourceInfo, linkPage = true }) => {
  const { toast } = useToast();
  const handleLike = () => {
    alert(linkPage);
  };

  const handleCopyButtonClicked = () => {
    navigator.clipboard.writeText(sourceInfo.link);
    toast({
      title: "Link Copied!",
      variant: "success",
    });
  };

  const handleDislike = () => {};
  const handleCommentButtonClicked = () => {};

  return (
    <div className="source-container bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col gap-1 pb-3">
      {/* Title and description */}
      <div>
        {linkPage ? (
          <a href={`/fontlink/${sourceInfo.id}`}>
            <h2 className="text-2xl font-bold text-white hover:underline">
              {sourceInfo.name}
            </h2>
          </a>
        ) : (
          <h2 className="text-2xl font-bold text-white">
            {sourceInfo.name}
          </h2>
        )}
        <h4 className="text-lg text-gray-400">
          {sourceInfo.numOfGames} games.
        </h4>
        <p className="mt-2 text-gray-300 text-wrap">{sourceInfo.description}</p>
      </div>

      {/* Tags Section */}
      <div className="tags flex flex-wrap gap-3 mt-3">
        {sourceInfo.tags.map((tag, index) => (
          <div
            key={index}
            className="tag px-4 py-2 bg-gray-700 text-white text-sm rounded-full"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="flex mt-auto pt-10 gap-5">
        <Button
          variant={"secondary"}
          className="rounded-lg w-full"
          onClick={handleCopyButtonClicked}
        >
          Copy Link
        </Button>
      </div>
      {/* Reactions Section */}
      <div className="reactions-container flex space-x-3">
        {/* Thumbs up */}
        <WidgetButton onClick={handleLike}>
          <ThumbsUpIcon className="h-6 w-6 text-green-500" />
          <span className="text-sm">{sourceInfo.likes}</span>
        </WidgetButton>
        {/* Thumbs down */}
        <WidgetButton onClick={handleDislike}>
          <ThumbsDownIcon className="h-6 w-6 text-red-500" />
          <span className="text-sm">{sourceInfo.dislike}</span>
        </WidgetButton>
        {/* Comments */}
        <WidgetButton onClick={handleCommentButtonClicked}>
          <MessageCircle className="h-6 w-6 text-blue-500" />
          <span className="text-sm">{sourceInfo.comments}</span>
        </WidgetButton>
      </div>
    </div>
  );
};

export default SourceCard;
