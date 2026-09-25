import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, localeCookie } from "./config";

export default getRequestConfig(async () => {
  const savedLocale = (await cookies()).get(localeCookie)?.value;
  const locale = savedLocale === "pt-BR" ? "pt-BR" : defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
