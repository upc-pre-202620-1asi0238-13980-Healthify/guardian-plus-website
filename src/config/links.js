import { SECTION_IDS } from "./navigation";

/*
 * Destination of the plan CTAs ("Comenzar gratis" / "Elegir este plan").
 * The mobile app download link is not published yet, so the CTAs fall back to
 * the contact section until REACT_APP_APP_DOWNLOAD_URL is configured.
 */
const APP_DOWNLOAD_URL = process.env.REACT_APP_APP_DOWNLOAD_URL || "";

export function buildPlanSignupUrl(planId) {
  if (!APP_DOWNLOAD_URL) {
    return `#${SECTION_IDS.contact}`;
  }

  const url = new URL(APP_DOWNLOAD_URL);
  url.searchParams.set("plan", planId);
  return url.toString();
}

export const SUPPORT_PHONE = {
  display: "+51 1 700 2026",
  href: "tel:+5117002026",
};

export const SUPPORT_SCHEDULE = "Lunes a sábado · 8:00 a 20:00";
