import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Megaphone, Store, Languages, Zap, ShieldCheck } from "lucide-react";
import { ScaleoNav, ScaleoFooter } from "@/components/ScaleoNav";
import { LANGUAGES } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scale o — Your shop online in 60 seconds" },
      {
        name: "description",
        content:
          "Scale o builds a ready website for local shops and freelancers in their own language, with WhatsApp and marketing add-ons. No technical skills needed.",
      },
      { property: "og:title", content: "Scale o — Your shop online in 60 seconds" },
      {
        property: "og:description",
        content:
          "Fill a few details in your language and get a live website with WhatsApp chat and marketing campaigns.",
      },
    ],
  }),
  component: Index,
});

const steps = [
  { icon: Languages, title: "Pick your language", body: "Hindi, Marathi, Tamil, Telugu, Bengali, Gujarati or English." },
  { icon: Store, title: "Fill your details", body: "Shop name, work, area, phone and what you sell. That's it." },
  { icon: Zap, title: "Website is ready", body: "A clean page with call and WhatsApp buttons, ready to share." },
];

const addons = [
  { icon: MessageCircle, title: "WhatsApp chat", body: "Customers message you with one tap. Auto-replies and order chats." },
  { icon: Megaphone, title: "Marketing campaigns", body: "Festival offers and reminders sent to your customer list." },
  { icon: ShieldCheck, title: "Trust badges", body: "Show reviews, timings and verified contact so people call." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScaleoNav />

      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="text-primary-foreground">
            <span className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              Your shop online in 60 seconds
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Fill a few boxes. Get a real website.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
              Made for small shop owners and freelancers. Answer simple questions in your own
              language and Scale o puts your business online — no technical knowledge needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/builder"
                className="rounded-xl bg-background px-6 py-3 text-base font-semibold text-primary transition-transform hover:-translate-y-0.5"
                style={{ boxShadow: "var(--shadow-lift)" }}
              >
                Make my website
              </Link>
              <Link
                to="/addons"
                className="rounded-xl border border-primary-foreground/40 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                See add-ons
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <span
                  key={l.code}
                  className="rounded-full bg-primary-foreground/12 px-3 py-1 text-sm text-primary-foreground/90"
                >
                  {l.native}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-background p-6" style={{ boxShadow: "var(--shadow-lift)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Preview
            </p>
            <div className="mt-4 rounded-2xl border border-border p-5">
              <h2 className="text-xl font-bold text-primary-deep">Sharma Electricals</h2>
              <p className="text-sm text-muted-foreground">Electrician · Karol Bagh, Delhi</p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                  Call now
                </span>
                <span className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground">
                  WhatsApp
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                {["Fan & light fitting", "House wiring", "Inverter repair"].map((s) => (
                  <li key={s} className="rounded-lg bg-muted px-3 py-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-primary-deep">Three simple steps</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <s.icon className="size-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold tracking-tight text-primary-deep">
            Grow with add-ons
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Switch them on any time from the add-ons page. No setup calls, no jargon.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {addons.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-6">
                <a.icon className="size-8 text-primary-glow" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
          <Link
            to="/builder"
            className="mt-10 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start now
          </Link>
        </div>
      </section>

      <ScaleoFooter />
    </div>
  );
}
