import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { ScaleoNav, ScaleoFooter } from "@/components/ScaleoNav";
import { t } from "@/lib/i18n";
import { loadBusiness, serviceList, type Business } from "@/lib/business-store";

export const Route = createFileRoute("/site")({
  head: () => ({
    meta: [
      { title: "My website — Scale o" },
      {
        name: "description",
        content: "Your Scale o business website with call and WhatsApp buttons, ready to share.",
      },
      { property: "og:title", content: "My website — Scale o" },
      {
        property: "og:description",
        content: "A ready-to-share page for your shop, built from your own details.",
      },
    ],
  }),
  component: SitePage,
});

function SitePage() {
  const [b, setB] = useState<Business | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setB(loadBusiness());
    setLoaded(true);
  }, []);

  if (!loaded) return <div className="min-h-screen bg-background" />;

  if (!b || !b.name) {
    return (
      <div className="min-h-screen bg-background">
        <ScaleoNav />
        <main className="mx-auto max-w-xl px-5 py-24 text-center">
          <h1 className="text-2xl font-bold text-primary-deep">No website yet</h1>
          <p className="mt-3 text-muted-foreground">
            Fill your details once and your page appears here.
          </p>
          <Link
            to="/builder"
            className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            Make my website
          </Link>
        </main>
        <ScaleoFooter />
      </div>
    );
  }

  const lang = b.lang;
  const services = serviceList(b);
  const wa = b.whatsapp.replace(/\D/g, "");

  return (
    <div className="min-h-screen bg-background">
      <ScaleoNav />

      <div className="border-b border-border bg-accent/60">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3">
          <p className="text-sm font-semibold text-accent-foreground">
            <CheckCircle2 className="mr-2 inline size-4" />
            {t(lang, "yourSiteReady")}
          </p>
          <div className="flex gap-2">
            <Link
              to="/builder"
              className="rounded-lg border border-primary/30 bg-background px-3 py-2 text-sm font-semibold text-primary"
            >
              {t(lang, "editDetails")}
            </Link>
            <Link
              to="/addons"
              className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
            >
              {t(lang, "addAddons")}
            </Link>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-5 py-10">
        <section
          className="overflow-hidden rounded-3xl p-8 text-primary-foreground sm:p-12"
          style={{ background: "var(--gradient-hero)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            {b.category}
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{b.name}</h1>
          {b.city && (
            <p className="mt-3 flex items-center gap-2 text-primary-foreground/85">
              <MapPin className="size-4" /> {b.city}
            </p>
          )}
          {b.about && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90">{b.about}</p>}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${b.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 font-semibold text-primary"
            >
              <Phone className="size-4" /> {t(lang, "callNow")}
            </a>
            {wa && (
              <a
                href={`https://wa.me/${wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/40 px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MessageCircle className="size-4" /> {t(lang, "chatWhatsapp")}
              </a>
            )}
          </div>
        </section>

        {services.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-primary-deep">{t(lang, "ourServices")}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s}
                  className="rounded-2xl border border-border bg-card p-5 text-foreground"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {s}
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h2 className="text-lg font-bold text-primary-deep">{t(lang, "contact")}</h2>
            <p className="mt-2 text-foreground">{b.phone}</p>
            {b.city && <p className="text-muted-foreground">{b.city}</p>}
          </div>
          {b.hours && (
            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-primary-deep">
                <Clock className="size-4" /> {t(lang, "openHours")}
              </h2>
              <p className="mt-2 text-foreground">{b.hours}</p>
            </div>
          )}
        </section>

        {b.addons.length > 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            Active add-ons: {b.addons.join(", ")}
          </p>
        )}
      </main>

      <ScaleoFooter />
    </div>
  );
}
