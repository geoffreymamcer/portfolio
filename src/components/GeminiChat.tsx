import React, { useState, useRef, useEffect } from "react";
import { Send, Minimize2, Sparkles, Terminal } from "lucide-react";
import { sendMessage } from "../services/geminiService";
import type { ChatMessage } from "../types.ts";

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      text: "System initialized. Ask about skills or projects.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    const responseText = await sendMessage(userMsg.text);

    const botMsg: ChatMessage = {
      role: "model",
      text: responseText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-white text-black px-5 py-3 rounded-sm hover:bg-mono-300 transition-all shadow-lg border border-white"
        >
          <Sparkles className="w-4 h-4" />
          <span className="font-bold text-sm tracking-wider">ASK AI</span>
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="w-[360px] max-w-[90vw] h-[550px] bg-mono-950 border border-mono-700 flex flex-col shadow-2xl animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-mono-800 bg-mono-900">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold text-sm text-white tracking-wide">
                ASSISTANT_V2
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-mono-400 hover:text-white transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <span className="text-[10px] font-mono text-mono-600 mb-1 uppercase">
                  {msg.role === "user" ? "User" : "System"}
                </span>
                <div
                  className={`max-w-[85%] p-3 text-sm leading-relaxed rounded-sm ${
                    msg.role === "user"
                      ? "bg-white text-black border border-white"
                      : "bg-mono-900 text-mono-300 border border-mono-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-mono text-mono-600 mb-1 uppercase">
                  System
                </span>
                <div className="bg-mono-900 border border-mono-800 p-3 rounded-sm flex gap-1">
                  <div
                    className="w-1.5 h-1.5 bg-mono-500 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-1.5 h-1.5 bg-mono-500 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-1.5 h-1.5 bg-mono-500 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-mono-800 bg-mono-950">
            <div className="flex items-center gap-2 bg-mono-900 border border-mono-700 px-3 py-2">
              <Terminal className="w-4 h-4 text-mono-500" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type command..."
                className="flex-1 bg-transparent border-none text-sm text-white focus:outline-none font-mono placeholder:text-mono-600"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="text-mono-400 hover:text-white transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
