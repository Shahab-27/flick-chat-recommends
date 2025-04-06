
import { Film } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Film className="h-6 w-6 text-cinema-accent" />
        <span className="font-bold text-xl">Movie Recommender</span>
      </div>
      
      <div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Popular</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">Categories</a>
          <a href="#" className="text-sm hover:text-primary transition-colors">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
