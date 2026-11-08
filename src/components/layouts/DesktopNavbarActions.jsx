// "use client";
// import { Link, useRouter } from "@/i18n/navigation";
// import { Button, HStack, IconButton, Separator, Text } from "@chakra-ui/react";
// import { Heart, Menu, ShoppingCart, UserRound, X } from "lucide-react";
// import { useLocale, useTranslations } from "next-intl";

// export default function DesktopNavbarActions({ setMenuOpen, menuOpen }) {
//   const t = useTranslations("Navbar");
//   const router = useRouter();
//   const locale = useLocale();
//   //===================================================
//   const isArabic = locale === "ar";
//   function toggleLanguage() {
//     const nextLocale = isArabic ? "en" : "ar";
//     startTransition(() => {
//       router.replace(pathname, { locale: nextLocale });
//     });
//   }
//   //===================================================

//   return (
//     <HStack gap={{ base: 1, md: 2 }} flexShrink={0}>
//       {/* Language */}
//       <Button
//         variant="variant"
//         size="sm"
//         borderRadius="full"
//         onClick={toggleLanguage}
//         aria-label={t("changeLanguage")}
//         backgroundColor={"#912345"}
//         color={"white"}
//       >
//         <Text fontSize="md" fontWeight="700">
//           {isArabic ? "EN" : "عربي"}
//         </Text>
//       </Button>

//       <Separator
//         orientation="vertical"
//         height="28px"
//         display={{ base: "none", sm: "block" }}
//       />

//       {/* Account */}
//       <IconButton
//         asChild
//         aria-label={t("account")}
//         variant="ghost"
//         borderRadius="full"
//         display={{ base: "none", sm: "inline-flex" }}
//       >
//         <Link href="/account">
//           <UserRound size={21} />
//         </Link>
//       </IconButton>

//       {/* Favorites */}
//       <IconButton
//         asChild
//         aria-label={t("favorites")}
//         variant="ghost"
//         borderRadius="full"
//       >
//         <Link href="/favorites">
//           <Heart size={21} />
//         </Link>
//       </IconButton>

//       {/* Cart */}
//       <IconButton
//         asChild
//         aria-label={t("cart")}
//         variant="ghost"
//         borderRadius="full"
//       >
//         <Link href="/cart">
//           <ShoppingCart size={21} />
//         </Link>
//       </IconButton>

//       {/* Mobile Menu */}
//       <IconButton
//         aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
//         variant="ghost"
//         borderRadius="full"
//         display={{ base: "inline-flex", lg: "none" }}
//         onClick={() => setMenuOpen((prev) => !prev)}
//       >
//         {menuOpen ? <X size={22} /> : <Menu size={22} />}
//       </IconButton>
//     </HStack>
//   );
// }

"use client";

import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

import { Button, HStack, IconButton, Separator, Text } from "@chakra-ui/react";

import { Heart, Menu, ShoppingCart, UserRound, X } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";

export default function DesktopNavbarActions({ setMenuOpen, menuOpen }) {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const isArabic = locale === "ar";

  function toggleLanguage() {
    const nextLocale = isArabic ? "en" : "ar";

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <HStack gap={{ base: 1, md: 2 }} flexShrink={0}>
      <Button
        size="sm"
        borderRadius="full"
        onClick={toggleLanguage}
        disabled={isPending}
        aria-label={t("changeLanguage")}
        bg="#912345"
        color="white"
        _hover={{ bg: "#b92957" }}
      >
        <Text fontSize="md" fontWeight="700">
          {isArabic ? "EN" : "عربي"}
        </Text>
      </Button>

      <Separator
        orientation="vertical"
        height="28px"
        display={{ base: "none", sm: "block" }}
      />

      <IconButton
        asChild
        aria-label={t("account")}
        variant="ghost"
        borderRadius="full"
        display={{ base: "none", sm: "inline-flex" }}
      >
        <Link href="/account">
          <UserRound size={21} />
        </Link>
      </IconButton>

      <IconButton
        asChild
        aria-label={t("favorites")}
        variant="ghost"
        borderRadius="full"
      >
        <Link href="/favorites">
          <Heart size={21} />
        </Link>
      </IconButton>

      <IconButton
        asChild
        aria-label={t("cart")}
        variant="ghost"
        borderRadius="full"
      >
        <Link href="/cart">
          <ShoppingCart size={21} />
        </Link>
      </IconButton>

      <IconButton
        aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
        variant="ghost"
        borderRadius="full"
        display={{ base: "inline-flex", lg: "none" }}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </IconButton>
    </HStack>
  );
}
