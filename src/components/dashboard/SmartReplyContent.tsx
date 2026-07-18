"use client";
import { useState } from "react";
import { Sparkles, RefreshCw, Copy, CheckCircle2, Globe, Star } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { recentReviews } from "@/lib/data";
import { cn } from "@/lib/utils";

const generatedReplies: Record<string, { en: string; ar: string }> = {
  rev001: {
    en: "Dear Ahmed, thank you for taking the time to share your experience with us. We sincerely apologize for the delay in your room service and the missed housekeeping visits — this falls well below the standard our guests deserve. We have shared your feedback directly with our F&B Director and Housekeeping Manager, and corrective steps have been initiated. We would very much like the opportunity to restore your confidence in us. Please reach out to our Guest Relations team at guestrelations@property.com and we will personally ensure your next stay exceeds expectations. Warm regards, The Hotel Management Team",
    ar: "عزيزي السيد أحمد، نشكرك على مشاركة تجربتك معنا. نعتذر بصدق عن التأخير في خدمة الغرف والإخفاقات في خدمة التدبير المنزلي - هذا لا يتوافق مع المعايير التي يستحقها ضيوفنا. لقد أطلعنا على ملاحظاتك مدير الطعام والشراب ومدير التدبير المنزلي وقد بدأنا خطوات تصحيحية فورية.",
  },
  rev003: {
    en: "Dear Mona, we are genuinely sorry to hear about your recent delivery experience. A 75-minute wait with incorrect items and cold food is completely unacceptable, and we fully understand your frustration. We have escalated your case to our Delivery Operations Manager and Customer Experience team. A full refund has been processed for your order. We would also like to offer you a complimentary meal on your next order as a gesture of goodwill. Thank you for helping us identify this issue — your feedback directly improves our service. The Cairo Kitchen Team",
    ar: "عزيزتي منى، نأسف بصدق لتجربة التوصيل التي مررت بها. الانتظار لمدة 75 دقيقة مع طلب خاطئ وطعام بارد أمر غير مقبول تمامًا. لقد تمت استعادة كامل مبلغ طلبك، كما نود تقديم وجبة مجانية عند طلبك القادم.",
  },
};

export default function SmartReplyContent() {
  const [selected, setSelected] = useState(recentReviews[0]);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [tone, setTone] = useState("professional");
  const [generating, setGenerating] = useState(false);
  const [editedReply, setEditedReply] = useState("");
  const [copied, setCopied] = useState(false);
  const [approved, setApproved] = useState(false);

  const currentReply = generatedReplies[selected.id]?.[language] ||
    "Thank you for your valuable feedback. We take all guest experiences seriously and will use your feedback to continue improving our service standards. We hope to welcome you again soon and provide an experience that meets your expectations.";

  const handleGenerate = async () => {
    setGenerating(true);
    await new Promise((r) => setTimeout(r, 1200));
    setEditedReply(currentReply);
    setGenerating(false);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApprove = () => setApproved(true);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 h-full">
        {/* Left — Review Queue */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#2D241C]">
              Pending Replies
            </h3>
            <Badge variant="warning" size="sm" dot>
              {recentReviews.filter((r) => !r.isReplied).length} unreplied
            </Badge>
          </div>

          <div className="space-y-3">
            {recentReviews.map((review) => {
              const platformColors: Record<string, string> = {
                "Google Reviews": "#4285F4",
                TripAdvisor: "#00AA6C",
                "Booking.com": "#003580",
                Talabat: "#FF6600",
                Agoda: "#5392F9",
              };
              return (
                <div
                  key={review.id}
                  onClick={() => {
                    setSelected(review);
                    setEditedReply("");
                    setApproved(false);
                  }}
                  className={cn(
                    "bg-white rounded-2xl border card-shadow p-4 cursor-pointer transition-all",
                    selected.id === review.id
                      ? "border-[#D97542] ring-2 ring-[#D97542]/20"
                      : "border-[#ECE4DA] hover:border-[#D97542]/40"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                      style={{ backgroundColor: platformColors[review.platform] || "#9E8F83" }}
                    >
                      {review.platform[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className={`w-2.5 h-2.5 ${s <= review.rating ? "text-[#D69E2E] fill-[#D69E2E]" : "text-[#ECE4DA] fill-[#ECE4DA]"}`} />
                          ))}
                        </div>
                        <div className="flex gap-1">
                          {review.isReplied ? (
                            <Badge variant="success" size="xs">Replied</Badge>
                          ) : (
                            <Badge variant="warning" size="xs">Pending</Badge>
                          )}
                          {review.isEscalated && <Badge variant="danger" size="xs">Escalated</Badge>}
                        </div>
                      </div>
                      <p className="text-xs text-[#2D241C] line-clamp-2 mb-1">{review.text}</p>
                      <p className="text-[10px] text-[#9E8F83]">{review.property} · {review.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — Reply Generator */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg ai-gradient flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-[#2D241C]">Review Context</h3>
            </div>
            <div className="bg-[#FCF8F3] rounded-xl p-3 mb-3">
              <p className="text-xs text-[#2D241C] leading-relaxed">
                &ldquo;{selected.text}&rdquo;
              </p>
              <p className="text-[10px] text-[#9E8F83] mt-2">— {selected.author} · {selected.property}</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant={selected.sentiment === "positive" ? "success" : selected.sentiment === "negative" ? "danger" : "warning"} dot>
                {selected.sentiment}
              </Badge>
              <Badge variant="default" size="xs">{selected.department}</Badge>
              <Badge variant="default" size="xs">{selected.platform}</Badge>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex bg-[#FCF8F3] rounded-xl p-1 gap-1">
              {[{ key: "en", label: "English" }, { key: "ar", label: "Arabic" }].map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLanguage(l.key as "en" | "ar")}
                  className={cn("px-3 py-1.5 rounded-lg text-xs font-medium transition-all", language === l.key ? "bg-white text-[#2D241C] card-shadow" : "text-[#9E8F83]")}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="flex bg-[#FCF8F3] rounded-xl p-1 gap-1">
              {["professional", "empathetic", "brief"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={cn("px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all", tone === t ? "bg-white text-[#2D241C] card-shadow" : "text-[#9E8F83]")}
                >
                  {t}
                </button>
              ))}
            </div>
            <Button
              variant="ai"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5" />}
              loading={generating}
              onClick={handleGenerate}
            >
              Generate Reply
            </Button>
          </div>

          {/* Generated Reply */}
          <div className="bg-white rounded-2xl border border-[#ECE4DA] card-shadow p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D97542]" />
                <p className="text-xs font-semibold text-[#2D241C]">AI Generated Reply</p>
                <Badge variant="ai" size="xs">Confidence: 91%</Badge>
              </div>
              {language === "ar" && <Globe className="w-3.5 h-3.5 text-[#9E8F83]" />}
            </div>

            <textarea
              value={editedReply || currentReply}
              onChange={(e) => setEditedReply(e.target.value)}
              className={cn(
                "w-full rounded-xl bg-[#FCF8F3] border border-[#ECE4DA] p-3 text-sm leading-relaxed text-[#2D241C] resize-none focus:outline-none focus:border-[#D97542] focus:ring-2 focus:ring-[#D97542]/20",
                language === "ar" && "text-right"
              )}
              dir={language === "ar" ? "rtl" : "ltr"}
              rows={8}
            />

            <div className="flex items-center gap-2 mt-3">
              <Button
                variant="ghost"
                size="sm"
                icon={<RefreshCw className="w-3.5 h-3.5" />}
                onClick={handleGenerate}
              >
                Regenerate
              </Button>
              <Button
                variant="secondary"
                size="sm"
                icon={copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                onClick={handleCopy}
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
              <Button
                variant="primary"
                size="sm"
                icon={approved ? <CheckCircle2 className="w-3.5 h-3.5" /> : undefined}
                onClick={handleApprove}
                className="ml-auto"
              >
                {approved ? "Approved & Posted" : "Approve & Post"}
              </Button>
            </div>
          </div>

          {/* Quality Scores */}
          <div className="bg-[#FCF8F3] rounded-2xl border border-[#ECE4DA] p-4">
            <p className="text-xs font-semibold text-[#6F6258] mb-3">Reply Quality Analysis</p>
            <div className="space-y-2">
              {[
                { label: "Brand Voice Alignment", score: 94 },
                { label: "Empathy Level", score: 88 },
                { label: "Issue Acknowledgment", score: 97 },
                { label: "Action Commitment", score: 85 },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xs text-[#6F6258] w-40 flex-shrink-0">{item.label}</span>
                  <div className="flex-1 h-1.5 bg-[#ECE4DA] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#D97542]"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#2D241C] w-8 text-right">{item.score}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
