
import { Star } from "lucide-react";
import { Movie } from "@/services/movieService";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="cinema-card h-full flex flex-col animate-fade-in-up">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={imageError ? "/placeholder.svg" : movie.poster} 
          alt={`${movie.title} poster`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setImageError(true)}
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-cinema-gold rounded-full p-1 px-2 flex items-center text-sm font-medium">
          <Star className="h-3 w-3 mr-1 fill-cinema-gold" />
          {movie.rating}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-3">
          <div className="flex flex-wrap gap-1">
            {movie.genre.map((genre) => (
              <span key={genre} className="text-xs bg-primary/80 rounded-full px-2 py-0.5">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <div className="flex items-center justify-between mt-1 mb-2">
          <span className="text-sm text-muted-foreground">{movie.year}</span>
          <span className="text-xs bg-secondary/70 text-white rounded px-2 py-0.5">{movie.industry}</span>
        </div>
        <p className="text-sm text-gray-300 line-clamp-3 flex-grow">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
