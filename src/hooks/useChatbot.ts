import { useState } from "react";
import { getMoviesByGenre, getMoviesByIndustry, Movie } from "@/services/movieService";

export type ChatMessage = {
  id: string;
  content: string;
  sender: "user" | "bot";
  movies?: Movie[];
  allMovies?: Movie[]; // Store all matched movies
  movieIndex?: number; // Track how many movies have been shown
};

// YouTube API Key
const YOUTUBE_API_KEY = "AIzaSyCLUxmvaVJHBTd7WW58J9FwD8db-YwlmMc";

export const useChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "Hello! I'm your movie assistant. You can ask me for movie recommendations by genre, industry or just chat with me about movies!",
      sender: "bot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Function to search for movie trailers using YouTube API
  const searchMovieTrailer = async (movieTitle: string): Promise<string | null> => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
          movieTitle + " official trailer"
        )}&key=${YOUTUBE_API_KEY}`
      );
      
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        return `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`;
      }
      return null;
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
      return null;
    }
  };

  // Function to handle user messages and generate responses
  const sendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message to the chat
    const userMessageId = Date.now().toString();
    const userMessage: ChatMessage = {
      id: userMessageId,
      content: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Check if the user is asking for more movies from a previous recommendation
    const lowercasedMessage = message.toLowerCase();
    const isAskingForMore = lowercasedMessage.includes("more") || 
                           lowercasedMessage.includes("show more") || 
                           lowercasedMessage.includes("additional") ||
                           lowercasedMessage.includes("next");
    
    // Process the message and generate a response
    setTimeout(() => {
      // Handle requests for more movies
      if (isAskingForMore) {
        const prevBotMessages = [...messages].reverse().find(
          msg => msg.sender === "bot" && msg.allMovies && msg.allMovies.length > 0
        );

        if (prevBotMessages && prevBotMessages.allMovies && prevBotMessages.movieIndex !== undefined) {
          const allMovies = prevBotMessages.allMovies;
          const currentIndex = prevBotMessages.movieIndex;
          const nextIndex = currentIndex + 5;
          
          // Check if there are more movies to show
          if (currentIndex < allMovies.length) {
            const nextMovies = allMovies.slice(currentIndex, nextIndex);
            const remainingCount = Math.max(0, allMovies.length - nextIndex);
            
            const botMessage: ChatMessage = {
              id: (Date.now() + 1).toString(),
              content: `Here are ${nextMovies.length} more movies for you:${
                remainingCount > 0 ? ` (${remainingCount} more available)` : ''
              }`,
              sender: "bot",
              movies: nextMovies,
              allMovies: allMovies,
              movieIndex: nextIndex
            };
            
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
            return;
          }
        }
      }
      
      // Regular recommendation processing
      const lowercasedMessage = message.toLowerCase();
      
      // Check if asking for movie trailer
      const isAskingForTrailer = lowercasedMessage.includes("trailer") || 
                                lowercasedMessage.includes("watch") || 
                                lowercasedMessage.includes("preview");
      
      // Check if the message is asking for recommendations
      const isAskingForRecommendations = 
        lowercasedMessage.includes("suggest") || 
        lowercasedMessage.includes("recommend") || 
        lowercasedMessage.includes("show me");
      
      let botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "I'm not sure what you're looking for. Try asking for movie recommendations by genre, like 'Suggest some comedy movies' or 'Recommend action films'.",
        sender: "bot",
      };

      // Handle trailer requests
      if (isAskingForTrailer) {
        const movieTitleMatch = message.match(/trailer\s+(?:for|of)?\s+(.+?)(?:\s+movie)?$/i) || 
                               message.match(/watch\s+(.+?)(?:\s+trailer)$/i) ||
                               message.match(/(.+?)(?:\s+trailer)/i);
        
        if (movieTitleMatch && movieTitleMatch[1]) {
          const movieTitle = movieTitleMatch[1].trim();
          
          botMessage = {
            id: (Date.now() + 1).toString(),
            content: `I'm looking for the trailer of "${movieTitle}". Please wait a moment...`,
            sender: "bot",
          };
          
          setMessages((prev) => [...prev, botMessage]);
          
          // Search for trailer asynchronously
          searchMovieTrailer(movieTitle).then(trailerUrl => {
            if (trailerUrl) {
              const trailerMessage: ChatMessage = {
                id: (Date.now() + 2).toString(),
                content: `Here's the trailer for "${movieTitle}": ${trailerUrl}`,
                sender: "bot",
              };
              setMessages((prev) => [...prev, trailerMessage]);
            } else {
              const notFoundMessage: ChatMessage = {
                id: (Date.now() + 2).toString(),
                content: `I couldn't find a trailer for "${movieTitle}". Please try another movie.`,
                sender: "bot",
              };
              setMessages((prev) => [...prev, notFoundMessage]);
            }
          }).catch(() => {
            const errorMessage: ChatMessage = {
              id: (Date.now() + 2).toString(),
              content: `Sorry, I encountered an issue while searching for the trailer. Please try again later.`,
              sender: "bot",
            };
            setMessages((prev) => [...prev, errorMessage]);
          });
          
          setIsTyping(false);
          return;
        }
      }

      // Parse the message to extract genre/industry information
      let movies: Movie[] | undefined;

      // Check for genre queries
      const genres = ["comedy", "action", "drama", "romance", "thriller", "horror", "sci-fi", "adventure", "crime", "sport"];
      const matchedGenre = genres.find(genre => lowercasedMessage.includes(genre));

      // Check for industry queries
      const isHollywood = lowercasedMessage.includes("hollywood");
      const isBollywood = lowercasedMessage.includes("bollywood");

      if (matchedGenre && isAskingForRecommendations) {
        // Genre-specific recommendations
        movies = getMoviesByGenre(matchedGenre);

        if (movies.length > 0) {
          if (isHollywood) {
            movies = movies.filter(movie => movie.industry === "Hollywood");
          } else if (isBollywood) {
            movies = movies.filter(movie => movie.industry === "Bollywood");
          }

          const allMovies = [...movies]; // Store all matched movies
          const displayMovies = movies.slice(0, 5); // Display only the first 5
          const remainingCount = Math.max(0, allMovies.length - 5);

          botMessage = {
            id: (Date.now() + 1).toString(),
            content: `Here are some ${matchedGenre} movies${isBollywood ? ' from Bollywood' : isHollywood ? ' from Hollywood' : ''} for you:${
              remainingCount > 0 ? ` (${remainingCount} more available, just ask for "more")` : ''
            }`,
            sender: "bot",
            movies: displayMovies,
            allMovies: allMovies,
            movieIndex: 5
          };
        } else {
          botMessage.content = `I couldn't find any ${matchedGenre} movies in my database.`;
        }
      } else if (isAskingForRecommendations && (isHollywood || isBollywood)) {
        // Industry-specific recommendations
        const industry = isHollywood ? "Hollywood" : "Bollywood";
        movies = getMoviesByIndustry(industry);

        if (movies.length > 0) {
          const allMovies = [...movies]; // Store all matched movies
          const displayMovies = movies.slice(0, 5); // Display only the first 5
          const remainingCount = Math.max(0, allMovies.length - 5);

          botMessage = {
            id: (Date.now() + 1).toString(),
            content: `Here are some ${industry} movies for you:${
              remainingCount > 0 ? ` (${remainingCount} more available, just ask for "more")` : ''
            }`,
            sender: "bot",
            movies: displayMovies,
            allMovies: allMovies,
            movieIndex: 5
          };
        } else {
          botMessage.content = `I couldn't find any ${industry} movies in my database.`;
        }
      } else if (lowercasedMessage.includes("hello") || lowercasedMessage.includes("hi")) {
        botMessage.content = "Hello! I'm your movie assistant. How can I help you today? You can ask me for movie recommendations by genre or industry, or even ask for movie trailers!";
      } else if (lowercasedMessage.includes("thank")) {
        botMessage.content = "You're welcome! Feel free to ask if you need more movie recommendations or want to see a movie trailer.";
      }

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        content: "Hello! I'm your movie assistant. You can ask me for movie recommendations by genre, industry or just chat with me about movies!",
        sender: "bot",
      },
    ]);
  };

  return { messages, sendMessage, isTyping, clearChat };
};
