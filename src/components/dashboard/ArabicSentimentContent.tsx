"use client";
import { Brain, Sparkles, Languages } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const arabicReviews = [
  {
    id: "ar001",
    text: "الأكل كان تمام بس الخدمة كانت بطيئة جداً وده مش مناسب للسعر ده",
    translation: "The food was fine but the service was very slow and that's not appropriate for this price",
    sentiment: "mixed",
    aspects: [
      { aspect: "Food Quality", sentiment: "positive", score: 85 },
      { aspect: "Service Speed", sentiment: "negative", score: 18 },
      { aspect: "Value for Money", sentiment: "negative", score: 32 },
    ],
    dialect: "Egyptian",
    platform: "Google Reviews",
    property: "Cairo Kitchen — Maadi",
    date: "2024-12-15",
  },
  {
    id: "ar002",
    text: "الفندق ممتاز والغرف نظيفة جداً والموظفين محترمين ومتعاونين. الإفطار كان رائع",
    translation: "The hotel is excellent, rooms are very clean, staff are professional and cooperative. Breakfast was wonderful.",
    sentiment: "positive",
    aspects: [
      { aspect: "Hotel Quality", sentiment: "positive", score: 95 },
      { aspect: "Room Cleanliness", sentiment: "positive", score: 92 },
      { aspect: "Staff Service", sentiment: "positive", score: 90 },
      { aspect: "Breakfast", sentiment: "positive", score: 96 },
    ],
    dialect: "Egyptian",
    platform: "Booking.com",
    property: "Four Seasons Nile Plaza",
    date: "2024-12-14",
  },
  {
    id: "ar003",
    text: "التوصيل جاء متأخر ساعة ونصف والأكل وصل بارد. طلبت استرداد وما حد رد عليا",
    translation: "Delivery arrived 1.5 hours late and the food arrived cold. I requested a refund and no one responded.",
    sentiment: "negative",
    aspects: [
      { aspect: "Delivery Time", sentiment: "negative", score: 5 },
      { aspect: "Food Temperature", sentiment: "negative", score: 8 },
      { aspect: "Customer Support", sentiment: "negative", score: 4 },
    ],
    dialect: "Egyptian",
    platform: "Talabat",
    property: "Cairo Kitchen — Maadi",
    date: "2024-12-15",
  },
];

const dialectData = [
  { dialect: "Egyptian Arabic", reviews: 8420, pct: 62 },
  { dialect: "Gulf Arabic", reviews: 2103, pct: 15 },
  { dialect: "Levantine", reviews: 1420, pct: 10 },
  { dialect: "Moroccan Darija", reviews: 891, pct: 7 },
  { dialect: "Modern Standard", reviews: 820, pct: 6 },
];

const sentimentByDialect = [
  { dialect: "Egyptian", positive: 71, neutral: 18, negative: 11 },
  { dialect: "Gulf", positive: 78, neutral: 14, negative: 8 },
  { dialect: "Levantine", positive: 68, neutral: 20, negative: 12 },
  { dialect: "MSA", positive: 75, neutral: 16, negative: 9 },
];

export default function ArabicSentimentContent() {
  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="bg-[#F4E0A3]/30 border border-[#D69E2E]/25 rounded-2xl p-5 flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl ai-gradient flex items-center justify-center flex-shrink-0">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#2D241C] mb-1">Arabic NLP Engine — Active</p>
          <p className="text-xs text-[#6F6258]">
            SEET&apos;s Arabic sentiment model is trained on 2M+ hospitality reviews in Egyptian Arabic (Masri), 
            Gulf Arabic, Levantine, and Modern Standard Arabic. The model understands colloquial expressions, 
            sarcasm, and dialect-specific hospitality terminology.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Egyptian Arabic ✓", "Gulf Arabic ✓", "Levantine ✓", "Moroccan Darija ✓", "MSA ✓"].map(d => (
              <Badge key={d} variant="ai" size="xs">{d}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Arabic Reviews Analyzed", value: "13,654" },
          { label: "Dialect Recognition Accuracy", value: "94.2%" },
          { label: "Sentiment Accuracy (vs Human)", value: "91.8%" },
          { label: "Sarcasm Detection Rate", value: "78%" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow px-5 py-4">
            <p className="text-[10px] font-semibold text-[#6F6258] uppercase tracking-wide">{s.label}</p>
            <p className="text-xl font-bold text-[#2D241C] mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Arabic Reviews */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-[#2D241C]">Live Arabic Review Analysis</h3>
        {arabicReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg ai-gradient flex items-center justify-center">
                  <Languages className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-[#2D241C]">{review.property}</span>
                <Badge variant="default" size="xs">{review.dialect} Arabic</Badge>
                <Badge variant="default" size="xs">{review.platform}</Badge>
              </div>
              <Badge
                variant={review.sentiment === "positive" ? "success" : review.sentiment === "negative" ? "danger" : "warning"}
                dot
              >
                {review.sentiment}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-[#FCF8F3] rounded-xl p-3 text-right" dir="rtl">
                <p className="text-[10px] text-[#9E8F83] mb-1 text-right">Original Arabic</p>
                <p className="text-sm text-[#2D241C] leading-relaxed">{review.text}</p>
              </div>
              <div className="bg-[#FCF8F3] rounded-xl p-3">
                <p className="text-[10px] text-[#9E8F83] mb-1">AI Translation</p>
                <p className="text-sm text-[#2D241C] leading-relaxed italic">&ldquo;{review.translation}&rdquo;</p>
              </div>
            </div>

            {/* Aspect Analysis */}
            <div>
              <p className="text-[10px] font-semibold text-[#9E8F83] uppercase tracking-wide mb-2">
                <Sparkles className="w-2.5 h-2.5 text-[#D97542] inline mr-1" />
                Aspect-Level Sentiment Analysis
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {review.aspects.map((aspect) => (
                  <div key={aspect.aspect} className="bg-[#FCF8F3] rounded-xl p-2.5">
                    <p className="text-[10px] text-[#6F6258] mb-1">{aspect.aspect}</p>
                    <div className="flex items-center gap-1.5">
                      <div className="flex-1 h-1 bg-[#ECE4DA] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${aspect.score}%`,
                            backgroundColor: aspect.sentiment === "positive" ? "#16A34A" : "#DC2626",
                          }}
                        />
                      </div>
                      <span className={`text-[10px] font-bold ${aspect.sentiment === "positive" ? "text-green-600" : "text-red-600"}`}>
                        {aspect.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dialect Breakdown */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <Card>
          <h3 className="text-sm font-semibold text-[#2D241C] mb-4">Reviews by Arabic Dialect</h3>
          <div className="space-y-3">
            {dialectData.map((d) => (
              <div key={d.dialect} className="flex items-center gap-3">
                <span className="text-xs text-[#2D241C] w-36 flex-shrink-0">{d.dialect}</span>
                <div className="flex-1 h-2 bg-[#F3EDE6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#D97542] rounded-full" style={{ width: `${d.pct}%` }} />
                </div>
                <span className="text-xs font-semibold text-[#2D241C] w-8 text-right">{d.pct}%</span>
                <span className="text-xs text-[#9E8F83] w-16 text-right">{d.reviews.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold text-[#2D241C] mb-4">Sentiment by Dialect</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sentimentByDialect} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3EDE6" vertical={false} />
              <XAxis dataKey="dialect" tick={{ fontSize: 10, fill: "#9E8F83" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#9E8F83" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid #ECE4DA", borderRadius: "12px", fontSize: 11 }} />
              <Bar dataKey="positive" name="Positive" fill="#16A34A" stackId="a" radius={[0, 0, 0, 0]} fillOpacity={0.8} />
              <Bar dataKey="neutral" name="Neutral" fill="#D69E2E" stackId="a" fillOpacity={0.8} />
              <Bar dataKey="negative" name="Negative" fill="#DC2626" stackId="a" radius={[4, 4, 0, 0]} fillOpacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
