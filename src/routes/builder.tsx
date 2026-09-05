import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  component: Builder;
});

function Builder() {
  return null;
}
