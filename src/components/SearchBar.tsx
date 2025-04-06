
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex w-full max-w-3xl mx-auto relative animate-fade-in"
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <input
          type="search"
          placeholder="Search for movies, actors, directors..."
          className="w-full py-4 pl-10 pr-20 rounded-xl bg-card/70 backdrop-blur-sm border-2 border-border focus:border-cinema-accent focus:ring-2 focus:ring-cinema-accent/50 focus:outline-none transition-all text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-2 px-4"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
