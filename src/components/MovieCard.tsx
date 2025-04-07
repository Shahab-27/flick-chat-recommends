
import { Star, Info } from "lucide-react";
import { Movie } from "@/services/movieService";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  // Use a default image if the movie poster is missing or invalid
  const defaultImage = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80";
  
  const posterUrl = movie.poster || defaultImage;

  return (
    <>
      <div 
        className="cinema-card h-full flex flex-col animate-fade-in-up bg-card rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative aspect-[2/3] overflow-hidden">
          {imageLoading && (
            <Skeleton className="absolute inset-0 w-full h-full" />
          )}
          <img 
            src={imageError ? defaultImage : posterUrl} 
            alt={`${movie.title} poster`}
            className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoading(false)}
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

      {/* Movie Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">{movie.title}</DialogTitle>
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1 fill-cinema-gold text-cinema-gold" />
                <span className="font-semibold">{movie.rating}/10</span>
              </div>
            </div>
            <DialogDescription>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm">{movie.year}</span>
                <span>•</span>
                <span className="text-sm bg-secondary/70 text-white rounded px-2 py-0.5">{movie.industry}</span>
              </div>
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="md:col-span-1">
              <div className="aspect-[2/3] overflow-hidden rounded-md">
                <img 
                  src={imageError ? defaultImage : posterUrl} 
                  alt={`${movie.title} poster`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Synopsis</h3>
                <p className="text-gray-300">{movie.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genre.map(genre => (
                    <span key={genre} className="text-sm bg-primary/80 rounded-full px-3 py-1">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              
              {movie.director && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Director</h3>
                  <p className="text-gray-300">{movie.director}</p>
                </div>
              )}
              
              {movie.cast && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Cast</h3>
                  <p className="text-gray-300">{movie.cast}</p>
                </div>
              )}
              
              {movie.language && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Language</h3>
                  <p className="text-gray-300">{movie.language}</p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MovieCard;
