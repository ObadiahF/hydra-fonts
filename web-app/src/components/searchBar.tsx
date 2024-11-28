import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import React, { useState, useRef } from "react";
import WidgetButton from "./buttons/WidgetButton";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const handleTextClear = () => {
    setSearchVal("");
    searchRef.current?.focus();
  };

  return (
    <div className="relative">
      <form action={"/search"} method="get">
        <Input
          type="text"
          placeholder="Search..."
          className="rounded-3xl pl-10"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          ref={searchRef}
          name="search"
          autoComplete="off"
          maxLength={100}
        />
      </form>
      <Search className="absolute top-2 left-2" />

      <WidgetButton
        className={`absolute top-0 right-0 transition-opacity ${
          searchVal.length < 1 ? "hidden" : ""
        }`}
        onClick={handleTextClear}
      >
        <X />
      </WidgetButton>
    </div>
  );
};

export default SearchBar;
