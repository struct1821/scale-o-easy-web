import type { LangCode } from "./i18n";

export type AddonId = "whatsapp" | "campaigns" | "catalog" | "reviews" | "bookings" | "payments";

export type Business = {
  lang: LangCode;
  name: string;
  category: string;
  city: string;
  phone: string;
  whatsapp: string;
  services: string;
  hours: string;
  about: string;
  addons: AddonId[];
};

export const emptyBusiness: Business = {
  lang: "en",
  name: "",
  category: "",
  city: "",
  phone: "",
  whatsapp: "",
  services: "",
  hours: "",
  about: "",
  addons: [],
};

const KEY = "scaleo.business";

export function loadBusiness(): Business | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    return { ...emptyBusiness, ...(JSON.parse(raw) as Business) };
  } catch {
    return null;
  }
}

export function saveBusiness(b: Business) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(b));
}

export function serviceList(b: Business): string[] {
  return b.services
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}
