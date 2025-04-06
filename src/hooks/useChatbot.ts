
import { useState } from "react";
import { getMoviesByGenre, getMoviesByIndustry, Movie } from "@/services/movieService";

export type ChatMessage = {
  id: string;
  content: string;
  sender: "user" | "bot";
  movies?: Movie[];
};

export const useChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "Hello! I'm your movie assistant. You can ask me for movie recommendations by genre, industry or just chat with me about movies!",
      sender: "bot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

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

    // Process the message and generate a response
    setTimeout(() => {
      const lowercasedMessage = message.toLowerCase();
      
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

          botMessage = {
            id: (Date.now() + 1).toString(),
            content: `Here are some ${matchedGenre} movies${isBollywood ? ' from Bollywood' : isHollywood ? ' from Hollywood' : ''} for you:`,
            sender: "bot",
            movies,
          };
        } else {
          botMessage.content = `I couldn't find any ${matchedGenre} movies in my database.`;
        }
      } else if (isAskingForRecommendations && (isHollywood || isBollywood)) {
        // Industry-specific recommendations
        const industry = isHollywood ? "Hollywood" : "Bollywood";
        movies = getMoviesByIndustry(industry);

        if (movies.length > 0) {
          botMessage = {
            id: (Date.now() + 1).toString(),
            content: `Here are some ${industry} movies for you:`,
            sender: "bot",
            movies,
          };
        } else {
          botMessage.content = `I couldn't find any ${industry} movies in my database.`;
        }
      } else if (lowercasedMessage.includes("hello") || lowercasedMessage.includes("hi")) {
        botMessage.content = "Hello! I'm your movie assistant. How can I help you today? You can ask me for movie recommendations by genre or industry!";
      } else if (lowercasedMessage.includes("thank")) {
        botMessage.content = "You're welcome! Feel free to ask if you need more movie recommendations.";
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
