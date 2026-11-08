import { NextIntlClientProvider } from "next-intl";
import "./../globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Provider } from "@/components/ui/provider";

export default async function AuthLayout({ children }) {
  return (
    <html>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider>
          <QueryProvider>
            <Provider>
              <main className="flex-1 bg-[#FBFBFB]">{children}</main>
              {/* <Footer /> */}
            </Provider>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
