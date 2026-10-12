// Shared links and contact details, so the navbar, mobile menu, footer and pages never drift apart.

export const AUTH_LINKS = {
  signIn: "https://admin.garidaexpress.com/sign-in",
  signUp: "https://admin.garidaexpress.com/sign-up",
};

export const APP_LINKS = {
  appStoreId: "6757619138",
  appStore: "https://apps.apple.com/iq/app/garida-express/id6757619138",
  googlePlay: "https://play.google.com/store/apps/details?id=com.garida.express",
};

export const CONTACT = {
  email: "info@garidaexpress.com",
  phone: "+964 (750) 666 9290",
  phoneHref: "tel:+9647506669290",
  address: "Zanko Bank, Adala, Erbil-Kurdistan, Iraq",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Zanko Bank, Adala, Erbil-Kurdistan, Iraq")}`,
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Download app", href: "/download" },
  { label: "Contact", href: "/contact" },
];

// Add Garida's real profile URLs here, e.g. { label: "Instagram", href: "https://instagram.com/<handle>" }.
// The footer only shows the icons once this list has entries (supported labels: Facebook, Instagram, LinkedIn).
export const SOCIAL_LINKS = [];
