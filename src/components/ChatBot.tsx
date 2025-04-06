
import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useChatbot, ChatMessage } from "@/hooks/useChatbot";
import MovieCard from "@/components/MovieCard";
import { useToast } from "@/components/ui/use-toast";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, isTyping, clearChat } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleClearChat = () => {
    clearChat();
    toast({
      description: "Chat history has been cleared",
    });
  };

  // Auto scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Chatbot toggle button */}
      <div className="fixed bottom-4 right-4 z-30">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggleChat}
                className={`rounded-full w-14 h-14 shadow-lg ${isOpen ? 'bg-primary hover:bg-primary/90' : 'bg-primary hover:bg-primary/90'}`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{isOpen ? "Close chat" : "Open movie assistant"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Chatbot panel */}
      <div
        className={`fixed bottom-20 right-4 w-full max-w-md bg-card shadow-xl rounded-xl overflow-hidden transition-all duration-300 transform z-20 border border-border ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat header */}
        <div className="bg-primary/80 backdrop-blur-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <h3 className="font-semibold">Movie Assistant</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearChat}
            className="h-8 w-8 p-0 rounded-full"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages container */}
        <div className="h-96 overflow-y-auto p-4 bg-cinema-dark">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === "user" ? "flex justify-end" : "flex justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-primary/80 text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                
                {/* Render movies if available */}
                {message.movies && message.movies.length > 0 && (
                  <div className="grid grid-cols-1 gap-3 mt-3">
                    {message.movies.slice(0, 3).map((movie) => (
                      <div 
                        key={movie.id} 
                        className="bg-black/30 rounded-lg p-2 flex gap-3 items-center"
                      >
                        <img 
                          src={movie.poster} 
                          alt={movie.title} 
                          className="w-12 h-16 object-cover rounded"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                          }}
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{movie.title}</h4>
                          <div className="flex items-center text-xs text-gray-300 mt-1">
                            <span>{movie.year}</span>
                            <span className="mx-1">•</span>
                            <span>{movie.industry}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {movie.genre.map(g => (
                              <span key={g} className="text-xs bg-primary/50 rounded-full px-1.5 py-0.5">
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                    {message.movies.length > 3 && (
                      <p className="text-xs text-center mt-1 text-gray-400">
                        +{message.movies.length - 3} more movies
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-secondary text-secondary-foreground max-w-[80%] rounded-lg p-3">
                <div className="flex gap-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="p-3 bg-card border-t border-border">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for movie recommendations..."
              className="flex-1 bg-secondary/50 border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-gray-400 mt-2 text-center">
            Try: "Suggest some comedy movies" or "Recommend Bollywood dramas"
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
