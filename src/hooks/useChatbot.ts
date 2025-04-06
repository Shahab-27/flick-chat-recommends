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
    } catch {
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
      const lower = message.toLowerCase();
      const isMore = lower.includes("more") || lower.includes("next");

      if (isMore) {
        const prevBot = [...messages].reverse().find(
          (m) => m.sender === "bot" && m.allMovies?.length
        );
        if (prevBot && prevBot.movieIndex !== undefined) {
          const next = prevBot.allMovies.slice(prevBot.movieIndex, prevBot.movieIndex + 5);
          const remaining = Math.max(0, prevBot.allMovies.length - (prevBot.movieIndex + 5));
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              content: `Here are ${next.length} more movies:${remaining > 0 ? ` (${remaining} more left)` : ""}`,
              sender: "bot",
              movies: next,
              allMovies: prevBot.allMovies,
              movieIndex: prevBot.movieIndex + 5,
            },
          ]);
          setIsTyping(false);
          return;
        }
      }

      const isTrailerRequest = lower.includes("trailer") || lower.includes("watch") || lower.includes("preview");
      if (isTrailerRequest) {
        const match = message.match(/trailer\s+(?:for|of)?\s+(.+?)(?:\s+movie)?$/i) ||
                      message.match(/i want trailer of (.+)/i) ||
                      message.match(/watch\s+(.+?)(?:\s+trailer)?/i);
        const movieTitle = match?.[1]?.trim();
        if (movieTitle) {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              content: `Looking for trailer of "${movieTitle}"...`,
              sender: "bot",
            },
          ]);
          searchMovieTrailer(movieTitle).then((url) => {
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now().toString(),
                content: url
                  ? `Here's the trailer for "${movieTitle}": ${url}`
                  : `Sorry, I couldn't find the trailer for "${movieTitle}".`,
                sender: "bot",
              },
            ]);
          });
          setIsTyping(false);
          return;
        }
      }

      const genres = ["comedy", "action", "drama", "romance", "thriller", "horror", "sci-fi", "adventure", "crime", "sport"];
      const matchedGenre = genres.find((g) => lower.includes(g));
      const isRecommend = lower.includes("suggest") || lower.includes("recommend") || lower.includes("show me") || lower.includes("some");

      if (matchedGenre && isRecommend) {
        let movies = getMoviesByGenre(matchedGenre);
        if (lower.includes("bollywood")) {
          movies = movies.filter((m) => m.industry === "Bollywood");
        } else if (lower.includes("hollywood")) {
          movies = movies.filter((m) => m.industry === "Hollywood");
        }

        if (movies.length) {
          const firstFive = movies.slice(0, 5);
          const remaining = Math.max(0, movies.length - 5);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              content: `Here are some ${matchedGenre} movies${lower.includes("bollywood") ? " from Bollywood" : lower.includes("hollywood") ? " from Hollywood" : ""}:${remaining > 0 ? ` (${remaining} more available, ask for "more")` : ""}`,
              sender: "bot",
              movies: firstFive,
              allMovies: movies,
              movieIndex: 5,
            },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              content: `I couldn't find any ${matchedGenre} movies.`,
              sender: "bot",
            },
          ]);
        }

        setIsTyping(false);
        return;
      }

      if (lower.includes("hollywood") && isRecommend) {
        const movies = getMoviesByIndustry("Hollywood");
        if (movies.length) {
          const firstFive = movies.slice(0, 5);
          const remaining = Math.max(0, movies.length - 5);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              content: `Here are some Hollywood movies:${remaining > 0 ? ` (${remaining} more available)` : ""}`,
              sender: "bot",
              movies: firstFive,
              allMovies: movies,
              movieIndex: 5,
            },
          ]);
        }
        setIsTyping(false);
        return;
      }

      if (lower.includes("bollywood") && isRecommend) {
        const movies = getMoviesByIndustry("Bollywood");
        if (movies.length) {
          const firstFive = movies.slice(0, 5);
          const remaining = Math.max(0, movies.length - 5);
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              content: `Here are some Bollywood movies:${remaining > 0 ? ` (${remaining} more available)` : ""}`,
              sender: "bot",
              movies: firstFive,
              allMovies: movies,
              movieIndex: 5,
            },
          ]);
        }
        setIsTyping(false);
        return;
      }

      let fallback = "I'm not sure what you're looking for. Try asking for movie recommendations by genre or ask for a trailer.";
      if (lower.includes("hello") || lower.includes("hi")) {
        fallback = "Hello! I'm your movie assistant. Ask me for movie recommendations or trailers!";
      } else if (lower.includes("thank")) {
        fallback = "You're welcome! Ask me anything about movies!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: fallback,
          sender: "bot",
        },
      ]);

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
