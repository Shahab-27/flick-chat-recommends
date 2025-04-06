
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ChatBot from "@/components/ChatBot";
import MovieCard from "@/components/MovieCard";
import { searchMovies, Movie } from "@/services/movieService";
import { Film } from "lucide-react";

const Index = () => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string) => {
    const results = searchMovies(query);
    setSearchResults(results);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-cinema-pattern">
      <Navbar />
      
      <main className="cinema-container pb-20">
        {/* Hero Section */}
        <div className="py-16 flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-6">
            <Film className="h-12 w-12 text-cinema-accent mr-2" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              FlickChat Recommends
            </h1>
          </div>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            Find your next favorite movie with our movie search and intelligent chatbot
          </p>
          
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Search Results */}
        {hasSearched && (
          <div className="mt-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">
              {searchResults.length > 0
                ? `Found ${searchResults.length} result${searchResults.length > 1 ? 's' : ''}`
                : 'No movies found'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        )}

        {/* Initial State - No Search Yet */}
        {!hasSearched && (
          <div className="mt-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">How to use FlickChat</h2>
              <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Search for Movies</h3>
                  <p className="text-gray-300">
                    Use the search bar above to find movies by title, genre, or description.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Chat for Recommendations</h3>
                  <p className="text-gray-300">
                    Click the chat button and ask for recommendations like "Suggest some comedy movies" or "Recommend Bollywood dramas".
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Chatbot Component */}
      <ChatBot />
    </div>
  );
};

export default Index;
