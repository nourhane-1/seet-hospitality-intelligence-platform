"use client";
import { useState } from "react";
import { Sparkles, Send, ThumbsUp, ThumbsDown, Copy, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: string;
}

const suggestedQuestions = [
  "Which property has the worst housekeeping sentiment this week?",
  "What are the top 3 issues causing negative reviews at Cairo Kitchen?",
  "Compare the response rate across all brands and tell me who's behind.",
  "What will happen to our Booking.com score if the Sofitel issue is not fixed?",
  "Generate a summary report for the board meeting on our reputation performance.",
  "Which delivery complaints are systemic vs. isolated incidents?",
];

const initialMessages: Message[] = [
  {
    id: "ai001",
    role: "ai",
    content:
      "Good morning! I'm SEET AI, your hospitality reputation intelligence assistant. I have full access to your portfolio of 38 properties across 6 brands.\n\nI can analyze review trends, predict reputation risks, explain sentiment patterns, generate reports, and recommend specific actions for your team.\n\nWhat would you like to know today?",
    timestamp: "9:00 AM",
  },
];

const mockResponses: Record<string, string> = {
  "Which property has the worst housekeeping sentiment this week?":
    "**Cairo Kitchen — Maadi Branch** has the lowest housekeeping-related sentiment this week, though it's a restaurant so the issue is actually kitchen cleanliness (often confused with housekeeping in reviews).\n\nFor hotel properties specifically, **Sofitel Sharm El Sheikh** has the worst housekeeping sentiment at **52% negative**, up from 38% last week. The primary complaints are:\n\n• Room not serviced on consecutive days (mentioned in 8 reviews)\n• Towel replenishment delays (5 reviews)\n• Minibar not restocked (4 reviews)\n\nI recommend alerting the Housekeeping Manager at Sofitel Sharm today. Would you like me to draft that alert?",
  "What are the top 3 issues causing negative reviews at Cairo Kitchen?":
    "Based on AI analysis of 1,842 reviews at Cairo Kitchen — Maadi Branch, the top 3 causes of negative reviews are:\n\n**1. Delivery Delays (47% of negative reviews)**\nAverage delivery time reported: 68 minutes. The Talabat SLA is 45 minutes. 73% of delivery complaints mention the driver, not the kitchen — suggesting a last-mile delivery partner issue.\n\n**2. Wrong or Incomplete Orders (28% of negative reviews)**\nItemization errors — missing sides, wrong proteins, incorrect special requests. This may be a packaging/labeling workflow issue rather than a kitchen accuracy issue.\n\n**3. Cold Food on Arrival (19% of negative reviews)**\nDirectly correlated with delivery delays. If delivery issue (#1) is resolved, this issue likely resolves itself.\n\n**My recommendation:** The root cause is the delivery partner, not the kitchen. Consider switching to direct delivery or renegotiating SLAs with Talabat.",
};

export default function AIAssistantContent() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `u${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 1500));

    const aiResponse =
      mockResponses[text] ||
      "I've analyzed your portfolio data and found some interesting patterns related to your question. Based on the last 30 days of review data across your 38 properties, I can see that guest satisfaction is trending positively in hotel properties (+3% sentiment) while delivery-related feedback for restaurant brands continues to be a concern. Would you like me to drill deeper into a specific property or brand?";

    const aiMessage: Message = {
      id: `ai${Date.now()}`,
      role: "ai",
      content: aiResponse,
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, aiMessage]);
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className="font-bold text-[#2D241C] mt-2 first:mt-0">
            {line.slice(2, -2)}
          </p>
        );
      }
      if (line.match(/^\*\*(.+)\*\*(.+)/)) {
        return (
          <p key={i} className="mt-1">
            <span className="font-semibold text-[#2D241C]">
              {line.match(/^\*\*(.+?)\*\*/)![1]}
            </span>
            <span>{line.replace(/^\*\*(.+?)\*\*/, "")}</span>
          </p>
        );
      }
      if (line.startsWith("•")) {
        return (
          <div key={i} className="flex items-start gap-2 mt-0.5">
            <span className="text-[#D97542] flex-shrink-0 mt-0.5">•</span>
            <span>{line.slice(2)}</span>
          </div>
        );
      }
      return line ? <p key={i} className={i > 0 ? "mt-1" : ""}>{line}</p> : <div key={i} className="h-1" />;
    });
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      {/* Suggested Questions */}
      <div className="px-6 py-3 border-b border-[#ECE4DA] bg-[#FCF8F3]">
        <p className="text-[10px] font-semibold text-[#9E8F83] uppercase tracking-wide mb-2">
          Suggested questions
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="flex-shrink-0 text-xs bg-white border border-[#ECE4DA] rounded-xl px-3 py-1.5 text-[#6F6258] hover:border-[#D97542] hover:text-[#D97542] transition-colors card-shadow"
            >
              {q.length > 60 ? q.substring(0, 58) + "..." : q}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3",
              message.role === "user" ? "flex-row-reverse" : "flex-row"
            )}
          >
            {/* Avatar */}
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                message.role === "ai"
                  ? "ai-gradient"
                  : "bg-gradient-to-br from-[#D97542] to-[#D69E2E]"
              )}
            >
              {message.role === "ai" ? (
                <Sparkles className="w-4 h-4 text-white" />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>

            {/* Message bubble */}
            <div
              className={cn(
                "max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                message.role === "user"
                  ? "bg-[#D97542] text-white rounded-tr-sm"
                  : "bg-white border border-[#ECE4DA] card-shadow text-[#2D241C] rounded-tl-sm"
              )}
            >
              <div
                className={cn(
                  "text-sm leading-relaxed",
                  message.role === "user" ? "text-white" : "text-[#2D241C]"
                )}
              >
                {message.role === "ai"
                  ? formatContent(message.content)
                  : message.content}
              </div>
              <p
                className={cn(
                  "text-[10px] mt-2",
                  message.role === "user" ? "text-white/60 text-right" : "text-[#9E8F83]"
                )}
              >
                {message.timestamp}
              </p>

              {/* AI Actions */}
              {message.role === "ai" && message.id !== "ai001" && (
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#F3EDE6]">
                  <button className="flex items-center gap-1 text-[10px] text-[#9E8F83] hover:text-green-600 transition-colors">
                    <ThumbsUp className="w-3 h-3" /> Helpful
                  </button>
                  <button className="flex items-center gap-1 text-[10px] text-[#9E8F83] hover:text-red-500 transition-colors">
                    <ThumbsDown className="w-3 h-3" /> Not helpful
                  </button>
                  <button className="flex items-center gap-1 text-[10px] text-[#9E8F83] hover:text-[#D97542] transition-colors ml-auto">
                    <Copy className="w-3 h-3" /> Copy
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full ai-gradient flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white border border-[#ECE4DA] card-shadow rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#D97542] animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-[#ECE4DA] bg-white">
        <div className="flex gap-3 items-end">
          <div className="flex-1 bg-[#FCF8F3] border border-[#ECE4DA] rounded-2xl px-4 py-3 focus-within:border-[#D97542] focus-within:ring-2 focus-within:ring-[#D97542]/20 transition-all">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
              placeholder="Ask SEET AI about your reputation data, trends, or properties..."
              className="w-full bg-transparent text-sm text-[#2D241C] placeholder:text-[#B5A89E] resize-none focus:outline-none max-h-32"
              rows={1}
            />
            <div className="flex items-center justify-between mt-2">
              <p className="text-[10px] text-[#9E8F83]">
                Press Enter to send · Shift+Enter for new line
              </p>
            </div>
          </div>
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 rounded-xl ai-gradient flex items-center justify-center text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex-shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
