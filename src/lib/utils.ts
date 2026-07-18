import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toString();
}

export function formatPercent(n: number, decimals = 1): string {
  return n.toFixed(decimals) + "%";
}

export function formatDate(d: Date | string): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatRelativeTime(d: Date | string): string {
  const date = typeof d === "string" ? new Date(d) : d;
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return formatDate(date);
}

export function getSentimentColor(sentiment: string): string {
  switch (sentiment.toLowerCase()) {
    case "positive":
      return "#16A34A";
    case "negative":
      return "#DC2626";
    case "neutral":
      return "#D69E2E";
    default:
      return "#9E8F83";
  }
}

export function getRatingColor(rating: number): string {
  if (rating >= 4.5) return "#16A34A";
  if (rating >= 4.0) return "#D69E2E";
  if (rating >= 3.0) return "#D97542";
  return "#DC2626";
}

export function getPlatformColor(platform: string): string {
  const colors: Record<string, string> = {
    google: "#4285F4",
    tripadvisor: "#00AA6C",
    "booking.com": "#003580",
    agoda: "#5392F9",
    expedia: "#FFB800",
    talabat: "#FF6600",
    elmenus: "#E63946",
    facebook: "#1877F2",
    instagram: "#E1306C",
  };
  return colors[platform.toLowerCase()] || "#9E8F83";
}
