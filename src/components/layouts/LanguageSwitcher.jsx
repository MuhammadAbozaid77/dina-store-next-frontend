"use client";
import { useTransition } from "react";
import { IconButton } from "@chakra-ui/react";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === "ar" ? "en" : "ar";

  function handleLanguageChange() {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <IconButton
      aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      variant="outline"
      size="md"
      borderRadius="full"
      onClick={handleLanguageChange}
      loading={isPending}
      disabled={isPending}
      colorPalette="gray"
    >
      <span style={{ fontSize: "13px", fontWeight: 600 }}>
        {locale === "ar" ? "EN" : "ع"}
      </span>
    </IconButton>
  );
}
