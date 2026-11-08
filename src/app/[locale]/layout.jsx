import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Provider } from "@/components/ui/provider";
import "./../globals.css";
import Navbar from "@/components/layouts/Navbar";
import QueryProvider from "@/providers/QueryProvider";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider>
          <QueryProvider>
            <Provider>
              <Navbar />
              <main className="flex-1 bg-[#FBFBFB]">{children}</main>
              {/* <Footer /> */}
            </Provider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
