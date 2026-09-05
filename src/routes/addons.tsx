import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle, Megaphone, ShoppingBag, Star, CalendarCheck, Wallet } from "lucide-react";
import { toast } from "sonner";
import { ScaleoNav, ScaleoFooter } from "@/components/ScaleoNav";
import {
  emptyBusiness,
  loadBusiness,
  saveBusiness,
  type AddonId,
  type Business,
} from "@/lib/business-store";

export const Route = createFileRoute("/addons")({
  head: () => ({
    meta: [
      { title: "WhatsApp & marketing add-ons — Scale o" },
      {
        name: "description",
        content:
          "Turn on WhatsApp chat, marketing campaigns, online catalogue, reviews, bookings and payments for your Scale o website.",
      },
      { property: "og:title", content: "WhatsApp & marketing add-ons — Scale o" },
      {
        property: "og:description",
        content: "One tap to add WhatsApp chat, offers and campaigns to your business page.",
      },
    ],
  }),
  component: Addons,
});

const ADDONS: { id: AddonId; icon: typeof MessageCircle; title: string; body: string }[] = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp chat",
    body: "A chat button on your page, quick replies and order messages.",
  },
  {
    id: "campaigns",
    icon: Megaphone,
    title: "Marketing campaigns",
    body: "Send festival offers and reminders to your saved customers.",
  },
  {
    id: "catalog",
    icon: ShoppingBag,
    title: "Online catalogue",
    body: "Show your items with photos and prices, share as a link.",
  },
  {
    id: "reviews",
    icon: Star,
    title: "Customer reviews",
    body: "Collect star ratings and show the best ones on your page.",
  },
  {
    id: "bookings",
    icon: CalendarCheck,
    title: "Bookings",
    body: "Let customers book a slot or a visit without calling.",
  },
  {
    id: "payments",
    icon: Wallet,
    title: "Online payments",
    body: "Take UPI and card payments straight from your page.",
  },
];

function Addons() {
  const [b, setB] = useState<Business>(emptyBusiness);

  useEffect(() => {
    const saved = loadBusiness();
    if (saved) setB(saved);
  }, []);

  const toggle = (id: AddonId) => {
    const on = b.addons.includes(id);
    const next: Business = {
      ...b,
      addons: on ? b.addons.filter((a) => a !== id) : [...b.addons, id],
    };
    setB(next);
    saveBusiness(next);
    const title = ADDONS.find((a) => a.id === id)?.title ?? "";
    toast[on ? "info" : "success"](on ? `${title} turned off` : `${title} added to your website`);
  };

  return (
    <div className="min-h-screen bg-background">
      <ScaleoNav />
      <main className="mx-auto max-w-6xl px-5 py-14">
        <h1 className="text-3xl font-bold tracking-tight text-primary-deep sm:text-4xl">
          Add-ons for your website
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Tap to switch on. Everything works right away on your page — nothing technical to set up.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ADDONS.map((a) => {
            const on = b.addons.includes(a.id);
            return (
              <button
                key={a.id}
                onClick={() => toggle(a.id)}
                className={`rounded-2xl border p-6 text-left transition-all hover:-translate-y-0.5 ${
                  on ? "border-primary bg-accent/60" : "border-border bg-card"
                }`}
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start justify-between">
                  <a.icon className={on ? "size-8 text-primary" : "size-8 text-primary-glow"} />
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      on
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {on ? "Added" : "Add"}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-foreground">{a.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/site"
            className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            See my website
          </Link>
          <Link
            to="/builder"
            className="rounded-xl border border-border px-6 py-3 font-semibold text-foreground hover:bg-accent"
          >
            Edit my details
          </Link>
        </div>
      </main>
      <ScaleoFooter />
    </div>
  );
}
