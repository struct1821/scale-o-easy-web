import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { ScaleoNav, ScaleoFooter } from "@/components/ScaleoNav";
import { LANGUAGES, t, type LangCode } from "@/lib/i18n";
import { emptyBusiness, loadBusiness, saveBusiness, type Business } from "@/lib/business-store";

export const Route = createFileRoute("/builder")({
  head: () => ({
    meta: [
      { title: "Build your website — Scale o" },
      {
        name: "description",
        content:
          "Answer a few questions in your own language and Scale o creates your business website instantly.",
      },
      { property: "og:title", content: "Build your website — Scale o" },
      {
        property: "og:description",
        content: "Shop name, work, area, phone — your website is ready in seconds.",
      },
    ],
  }),
  component: Builder,
});

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

function Builder() {
  const navigate = useNavigate();
  const [data, setData] = useState<Business>(emptyBusiness);
  const [step, setStep] = useState(0);
  const [building, setBuilding] = useState(false);

  useEffect(() => {
    const saved = loadBusiness();
    if (saved) setData(saved);
  }, []);

  const lang = data.lang;
  const set = <K extends keyof Business>(key: K, value: Business[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const totalSteps = 4;
  const canContinue =
    step === 0
      ? true
      : step === 1
        ? data.name.trim() !== "" && data.category.trim() !== ""
        : step === 2
          ? data.phone.trim() !== ""
          : true;

  const finish = () => {
    setBuilding(true);
    saveBusiness(data);
    window.setTimeout(() => navigate({ to: "/site" }), 1400);
  };

  return (
    <div className="min-h-screen bg-background" style={{ background: "var(--gradient-soft)" }}>
      <ScaleoNav />
      <main className="mx-auto max-w-2xl px-5 py-14">
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary">
            {t(lang, "step")} {step + 1} {t(lang, "of")} {totalSteps}
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-accent">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <div
          className="rounded-3xl border border-border bg-card p-7"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {building ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <Loader2 className="size-10 animate-spin text-primary" />
              <p className="text-lg font-semibold text-primary-deep">{t(lang, "createSite")}…</p>
              <p className="text-sm text-muted-foreground">{data.name}</p>
            </div>
          ) : step === 0 ? (
            <div>
              <h1 className="text-2xl font-bold text-primary-deep">{t(lang, "chooseLanguage")}</h1>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => set("lang", l.code as LangCode)}
                    className={`rounded-xl border px-4 py-4 text-base font-semibold transition-colors ${
                      lang === l.code
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:bg-accent"
                    }`}
                  >
                    {l.native}
                  </button>
                ))}
              </div>
            </div>
          ) : step === 1 ? (
            <div className="space-y-5">
              <Field label={t(lang, "businessName")}>
                <input
                  className={inputClass}
                  value={data.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Sharma Electricals"
                />
              </Field>
              <Field label={t(lang, "whatYouDo")}>
                <input
                  className={inputClass}
                  value={data.category}
                  onChange={(e) => set("category", e.target.value)}
                  placeholder="Electrician"
                />
              </Field>
              <Field label={t(lang, "city")}>
                <input
                  className={inputClass}
                  value={data.city}
                  onChange={(e) => set("city", e.target.value)}
                  placeholder="Karol Bagh, Delhi"
                />
              </Field>
            </div>
          ) : step === 2 ? (
            <div className="space-y-5">
              <Field label={t(lang, "phone")}>
                <input
                  className={inputClass}
                  inputMode="tel"
                  value={data.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="98765 43210"
                />
              </Field>
              <Field label={t(lang, "whatsapp")}>
                <input
                  className={inputClass}
                  inputMode="tel"
                  value={data.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  placeholder="98765 43210"
                />
              </Field>
              <Field label={t(lang, "hours")}>
                <input
                  className={inputClass}
                  value={data.hours}
                  onChange={(e) => set("hours", e.target.value)}
                  placeholder="9 AM – 9 PM"
                />
              </Field>
            </div>
          ) : (
            <div className="space-y-5">
              <Field label={t(lang, "services")} hint={t(lang, "servicesHint")}>
                <textarea
                  className={`${inputClass} min-h-32`}
                  value={data.services}
                  onChange={(e) => set("services", e.target.value)}
                  placeholder={"Fan & light fitting\nHouse wiring\nInverter repair"}
                />
              </Field>
              <Field label={t(lang, "about")}>
                <textarea
                  className={`${inputClass} min-h-24`}
                  value={data.about}
                  onChange={(e) => set("about", e.target.value)}
                />
              </Field>
            </div>
          )}

          {!building && (
            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="rounded-xl border border-border px-5 py-3 font-semibold text-foreground transition-colors hover:bg-accent disabled:opacity-40"
              >
                {t(lang, "back")}
              </button>
              {step < totalSteps - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canContinue}
                  className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  {t(lang, "next")}
                </button>
              ) : (
                <button
                  onClick={finish}
                  className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {t(lang, "createSite")}
                </button>
              )}
            </div>
          )}
        </div>
      </main>
      <ScaleoFooter />
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-base font-semibold text-foreground">{label}</span>
      {hint && <span className="ml-2 text-sm text-muted-foreground">{hint}</span>}
      <div className="mt-2">{children}</div>
    </label>
  );
}
