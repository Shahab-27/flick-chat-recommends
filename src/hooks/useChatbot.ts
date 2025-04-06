import { useState } from "react";
import { getMoviesByGenre, getMoviesByIndustry, Movie } from "@/services/movieService";

export type ChatMessage = {
  id: string;
  content: string;
  sender: "user" | "bot";
  movies?: Movie[];
  allMovies?: Movie[];
  movieIndex?: number;
};

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

  const sendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessageId = Date.now().toString();
    const userMessage: ChatMessage = {
      id: userMessageId,
      content: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const lowercasedMessage = message.toLowerCase();

      const genres = ["comedy", "action", "drama", "romance", "thriller", "horror", "sci-fi", "adventure", "crime", "sport"];
      const matchedGenre = genres.find((genre) => lowercasedMessage.includes(genre));
      const isHollywood = lowercasedMessage.includes("hollywood");
      const isBollywood = lowercasedMessage.includes("bollywood");
      const isAskingForRecommendations =
        lowercasedMessage.includes("suggest") ||
        lowercasedMessage.includes("recommend") ||
        lowercasedMessage.includes("show me");

      const isAskingForTrailer =
        lowercasedMessage.includes("trailer") ||
        lowercasedMessage.includes("watch") ||
        lowercasedMessage.includes("preview");

      let botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "I'm not sure what you're looking for. Try asking for movie recommendations by genre, like 'Suggest some comedy movies' or 'Recommend action films'.",
        sender: "bot",
      };

      // Trailer logic
      if (isAskingForTrailer) {
        const movieTitleMatch =
          message.match(/trailer\s+(?:for|of)?\s+(.+?)(?:\s+movie)?$/i) ||
          message.match(/watch\s+(.+?)(?:\s+trailer)$/i) ||
          message.match(/(?:trailer\s+)?(.+?)(?:\s+trailer)?$/i);

        if (movieTitleMatch && movieTitleMatch[1]) {
          const movieTitle = movieTitleMatch[1].trim();

          botMessage = {
            id: (Date.now() + 1).toString(),
            content: `I'm looking for the trailer of "${movieTitle}". Please wait a moment...`,
            sender: "bot",
          };

          setMessages((prev) => [...prev, botMessage]);

          searchMovieTrailer(movieTitle).then((trailerUrl) => {
            const trailerMessage: ChatMessage = {
              id: (Date.now() + 2).toString(),
              content: trailerUrl
                ? `Here's the trailer for "${movieTitle}": ${trailerUrl}`
                : `I couldn't find a trailer for "${movieTitle}". Please try another movie.`,
              sender: "bot",
            };
            setMessages((prev) => [...prev, trailerMessage]);
          });

          setIsTyping(false);
          return;
        }
      }

      // Genre or Industry Recommendation
      let movies: Movie[] | undefined;

      if (matchedGenre && isAskingForRecommendations) {
        movies = getMoviesByGenre(matchedGenre);

        if (movies.length > 0) {
          if (isHollywood) movies = movies.filter((m) => m.industry === "Hollywood");
          else if (isBollywood) movies = movies.filter((m) => m.industry === "Bollywood");

          const allMovies = [...movies];
          const displayMovies = movies.slice(0, 5);
          const remainingCount = Math.max(0, allMovies.length - 5);

          botMessage = {
            id: (Date.now() + 1).toString(),
            content: `Here are some ${matchedGenre} movies${isBollywood ? " from Bollywood" : isHollywood ? " from Hollywood" : ""} for you:${
              remainingCount > 0 ? ` (${remainingCount} more available, just ask for "more")` : ""
            }`,
            sender: "bot",
            movies: displayMovies,
            allMovies,
            movieIndex: 5,
          };
        } else {
          botMessage.content = `I couldn't find any ${matchedGenre} movies in my database.`;
        }
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
