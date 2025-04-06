
// Mock movie data service since we don't have a real API
// In a real application, this would fetch from a movie database API

export interface Movie {
  id: string;
  title: string;
  year: number;
  poster: string;
  genre: string[];
  rating: number;
  industry: 'Hollywood' | 'Bollywood';
  description: string;
}

// Sample movie database
const movieDatabase: Movie[] = [
  {
    id: "1",
    title: "The Hangover",
    year: 2009,
    poster: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: ["Comedy"],
    rating: 7.7,
    industry: "Hollywood",
    description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing."
  },
  {
    id: "2",
    title: "Superbad",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_.jpg",
    genre: ["Comedy"],
    rating: 7.6,
    industry: "Hollywood",
    description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry."
  },
  {
    id: "3",
    title: "3 Idiots",
    year: 2009,
    poster: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genre: ["Comedy", "Drama"],
    rating: 8.4,
    industry: "Bollywood",
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'."
  },
  {
    id: "4",
    title: "The Dark Knight",
    year: 2008,
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    industry: "Hollywood",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    id: "5",
    title: "Inception",
    year: 2010,
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.8,
    industry: "Hollywood",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    id: "6",
    title: "Hera Pheri",
    year: 2000,
    poster: "https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWE0MGQtODY2NjY2MjE1MTE5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Comedy"],
    rating: 8.2,
    industry: "Bollywood",
    description: "Three unemployed men find the answer to all their money problems when they receive a call from a kidnapper. However, things do not go as planned."
  },
  {
    id: "7",
    title: "The Shawshank Redemption",
    year: 1994,
    poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    genre: ["Drama"],
    rating: 9.3,
    industry: "Hollywood",
    description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion."
  },
  {
    id: "8",
    title: "Andaz Apna Apna",
    year: 1994,
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOWRlNzAtOGYwYi00ZTFmLTllZDgtNmUxNGU3ODA5MmNjXkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_.jpg",
    genre: ["Comedy", "Romance"],
    rating: 8.1,
    industry: "Bollywood",
    description: "Two slackers competing for the affections of an heiress inadvertently become her protectors from an evil criminal."
  },
  {
    id: "9",
    title: "Lagaan",
    year: 2001,
    poster: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genre: ["Drama", "Sport"],
    rating: 8.1,
    industry: "Bollywood",
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers."
  },
  {
    id: "10",
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    poster: "https://m.media-amazon.com/images/M/MV5BNTdjM2NmYTgtOGQyNy00NmI3LTk3ZjktZmIyZjY4MmU5N2FkXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
    genre: ["Romance", "Drama"],
    rating: 8.1,
    industry: "Bollywood",
    description: "When Raj meets Simran in Europe, it isn't love at first sight but when Simran moves to India for an arranged marriage, love makes its presence felt."
  },
  // Adding more movies in romantic genre
  {
    id: "11",
    title: "The Notebook",
    year: 2004,
    poster: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
    genre: ["Romance", "Drama"],
    rating: 7.8,
    industry: "Hollywood",
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences."
  },
  {
    id: "12",
    title: "Pride & Prejudice",
    year: 2005,
    poster: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDEzMzQ3MDI@._V1_.jpg",
    genre: ["Romance", "Drama"],
    rating: 7.8,
    industry: "Hollywood",
    description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class."
  },
  {
    id: "13",
    title: "Jab We Met",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzUzMzgxNA@@._V1_.jpg",
    genre: ["Romance", "Comedy"],
    rating: 7.9,
    industry: "Bollywood",
    description: "A depressed businessman finds solace in the company of a free-spirited girl after they meet on a train and she changes his perspective on life."
  },
  {
    id: "14",
    title: "Yeh Jawaani Hai Deewani",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_.jpg",
    genre: ["Romance", "Comedy", "Drama"],
    rating: 7.2,
    industry: "Bollywood",
    description: "A love story between an introvert girl who finds happiness in small things and an extrovert boy who wants to travel the world and discover his passion."
  },
  // Adding more movies in sports genre
  {
    id: "15",
    title: "Rocky",
    year: 1976,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_.jpg",
    genre: ["Sport", "Drama"],
    rating: 8.1,
    industry: "Hollywood",
    description: "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect."
  },
  {
    id: "16",
    title: "Chak De! India",
    year: 2007,
    poster: "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmODM5OTk2ZGVjXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
    genre: ["Sport", "Drama"],
    rating: 8.2,
    industry: "Bollywood",
    description: "A disgraced former hockey player coaches the Indian women's national team to victory against all odds."
  },
  {
    id: "17",
    title: "Remember the Titans",
    year: 2000,
    poster: "https://m.media-amazon.com/images/M/MV5BYThkMzgxNjEtMzFiOC00MTI0LWI5MDItNDVmYjA4NzY5MDQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genre: ["Sport", "Drama", "Biography"],
    rating: 7.8,
    industry: "Hollywood",
    description: "The true story of a newly appointed African-American coach and his high school team on their first season as a racially integrated unit."
  },
  {
    id: "18",
    title: "Bhaag Milkha Bhaag",
    year: 2013,
    poster: "https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_.jpg",
    genre: ["Sport", "Biography", "Drama"],
    rating: 8.2,
    industry: "Bollywood",
    description: "The story of the Indian athlete Milkha Singh, who overcame the massacre of his family and the trauma of displacement during the India-Pakistan partition to become one of India's most iconic athletes."
  },
  {
    id: "19",
    title: "MS Dhoni: The Untold Story",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: ["Sport", "Biography", "Drama"],
    rating: 7.9,
    industry: "Bollywood",
    description: "The untold story of Mahendra Singh Dhoni's journey from ticket collector to legendary cricket captain of India."
  },
  {
    id: "20",
    title: "Dangal",
    year: 2016,
    poster: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    genre: ["Sport", "Biography", "Drama"],
    rating: 8.4,
    industry: "Bollywood",
    description: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India's first world-class female wrestlers."
  }
];

// Function to search movies
export const searchMovies = (query: string): Movie[] => {
  if (!query) return [];
  
  const lowercaseQuery = query.toLowerCase();
  return movieDatabase.filter(movie => 
    movie.title.toLowerCase().includes(lowercaseQuery) ||
    movie.genre.some(g => g.toLowerCase().includes(lowercaseQuery)) ||
    movie.industry.toLowerCase().includes(lowercaseQuery) ||
    movie.description.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to filter movies by genre
export const getMoviesByGenre = (genre: string): Movie[] => {
  if (!genre) return [];
  
  const lowercaseGenre = genre.toLowerCase();
  return movieDatabase.filter(movie => 
    movie.genre.some(g => g.toLowerCase().includes(lowercaseGenre))
  );
};

// Function to filter movies by industry (Hollywood/Bollywood)
export const getMoviesByIndustry = (industry: 'Hollywood' | 'Bollywood'): Movie[] => {
  return movieDatabase.filter(movie => movie.industry === industry);
};

// Get all available genres
export const getAllGenres = (): string[] => {
  const genres = new Set<string>();
  
  movieDatabase.forEach(movie => {
    movie.genre.forEach(genre => {
      genres.add(genre);
    });
  });
  
  return Array.from(genres);
};
