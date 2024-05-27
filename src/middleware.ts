import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "de", "sp", "hi", "fr"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(de|en|sp|hi|fr)/:path*"],
};
