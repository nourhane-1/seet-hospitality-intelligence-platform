const platforms = [
  { name: "Google Reviews", color: "#4285F4", letter: "G", reviews: "1.2M+" },
  { name: "TripAdvisor", color: "#00AA6C", letter: "T", reviews: "480K+" },
  { name: "Booking.com", color: "#003580", letter: "B", reviews: "340K+" },
  { name: "Agoda", color: "#5392F9", letter: "A", reviews: "210K+" },
  { name: "Expedia", color: "#FFB800", letter: "E", reviews: "95K+" },
  { name: "Talabat", color: "#FF6600", letter: "Ta", reviews: "180K+" },
  { name: "Elmenus", color: "#E63946", letter: "El", reviews: "75K+" },
  { name: "Facebook", color: "#1877F2", letter: "f", reviews: "60K+" },
  { name: "Instagram", color: "#E1306C", letter: "IG", reviews: "20K+" },
];

export default function PlatformLogos() {
  return (
    <section className="bg-[#FCF8F3] py-14 border-y border-[#ECE4DA]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-[#9E8F83] uppercase tracking-widest mb-8">
          Aggregating reviews from all major hospitality platforms
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 card-shadow border border-[#ECE4DA] hover:card-shadow-hover transition-shadow"
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: p.color }}
              >
                {p.letter}
              </div>
              <div>
                <p className="text-xs font-semibold text-[#2D241C]">
                  {p.name}
                </p>
                <p className="text-[10px] text-[#9E8F83]">
                  {p.reviews} reviews
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
          {[
            { value: "2.4M+", label: "Total Reviews Analyzed" },
            { value: "9", label: "Platforms Connected" },
            { value: "Real-time", label: "Review Sync" },
            { value: "14", label: "MENA Markets" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-[#D97542]">{stat.value}</p>
              <p className="text-xs text-[#9E8F83] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
