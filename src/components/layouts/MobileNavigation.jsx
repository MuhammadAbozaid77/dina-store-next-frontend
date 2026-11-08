// import { Link, usePathname } from "@/i18n/navigation";
// import { NAV_ITEMS } from "@/utils/links";
// import {
//   VStack,
//   Link as ChakraLink,
//   Separator,
//   HStack,
//   Text,
// } from "@chakra-ui/react";
// import { UserRound } from "lucide-react";
// import { useTranslations } from "next-intl";

// export default function MobileNavigation() {
//   const t = useTranslations("Navbar");
//   const pathname = usePathname();
//   //=========================================================
//   return (
//     <VStack
//       display={{ base: "flex", lg: "none" }}
//       align="stretch"
//       gap={0}
//       px={4}
//       pb={4}
//       borderTopWidth="1px"
//       borderColor="gray.100"
//     >
//       {NAV_ITEMS.map((item) => (
//         <ChakraLink
//           key={item.href}
//           asChild
//           py={3}
//           px={3}
//           borderRadius="lg"
//           fontWeight={pathname === item.href ? "700" : "500"}
//           color={pathname === item.href ? "#7C3AED" : "gray.700"}
//           bg={pathname === item.href ? "purple.50" : "transparent"}
//           _hover={{
//             bg: "purple.50",
//             color: "#7C3AED",
//             textDecoration: "none",
//           }}
//           onClick={() => setMenuOpen(false)}
//         >
//           <Link href={item.href}>{t(item.label)}</Link>
//         </ChakraLink>
//       ))}

//       <Separator my={2} />

//       <ChakraLink asChild py={3} px={3}>
//         <Link href="/account" onClick={() => setMenuOpen(false)}>
//           <HStack gap={2}>
//             <UserRound size={19} />
//             <Text>{t("account")}</Text>
//           </HStack>
//         </Link>
//       </ChakraLink>
//     </VStack>
//   );
// }

"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

import {
  VStack,
  HStack,
  Box,
  Text,
  Link as ChakraLink,
  Separator,
  IconButton,
} from "@chakra-ui/react";

import { UserRound, ChevronDown, ChevronUp } from "lucide-react";
import { allCategories } from "@/utils/links";

export default function MobileNavigation({ setMenuOpen }) {
  const pathname = usePathname();
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <VStack
      display={{ base: "flex", lg: "none" }}
      align="stretch"
      gap={0}
      px={4}
      pb={4}
      borderTopWidth="1px"
      borderColor="gray.100"
      maxH="70vh"
      overflowY="auto"
    >
      {allCategories.map((item) => {
        const active =
          pathname === `/categories/${item.slug}` ||
          pathname.startsWith(`/categories/${item.slug}/`);

        const isOpen = openCategory === item.slug;

        return (
          <Box key={item.slug}>
            <HStack
              justify="space-between"
              py={2}
              px={3}
              borderRadius="lg"
              bg={active ? "#fff0f4" : "transparent"}
            >
              <ChakraLink
                asChild
                flex="1"
                py={2}
                fontWeight={active ? "700" : "500"}
                color={active ? "#912345" : "gray.700"}
                _hover={{
                  color: "#b92957",
                  textDecoration: "none",
                }}
              >
                <Link
                  href={`/categories/${item.slug}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </ChakraLink>

              {item.subCategories.length > 0 && (
                <IconButton
                  aria-label="عرض التصنيفات"
                  variant="ghost"
                  size="sm"
                  color="#912345"
                  onClick={() => setOpenCategory(isOpen ? null : item.slug)}
                >
                  {isOpen ? <ChevronUp size={19} /> : <ChevronDown size={19} />}
                </IconButton>
              )}
            </HStack>

            {/* Subcategories */}
            {isOpen && (
              <VStack align="stretch" gap={1} pr={5} pb={3}>
                {item.subCategories.map((sub) => (
                  <ChakraLink
                    key={sub.slug}
                    asChild
                    py={2}
                    px={3}
                    borderRadius="md"
                    fontSize="sm"
                    color={
                      pathname === `/categories/${item.slug}/${sub.slug}`
                        ? "#912345"
                        : "gray.600"
                    }
                    bg={
                      pathname === `/categories/${item.slug}/${sub.slug}`
                        ? "#fff0f4"
                        : "transparent"
                    }
                    _hover={{
                      bg: "#fff0f4",
                      color: "#912345",
                      textDecoration: "none",
                    }}
                  >
                    <Link
                      href={`/categories/${item.slug}/${sub.slug}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  </ChakraLink>
                ))}
              </VStack>
            )}
          </Box>
        );
      })}

      <Separator my={2} />

      <ChakraLink asChild py={3} px={3}>
        <Link href="/account" onClick={() => setMenuOpen(false)}>
          <HStack gap={2}>
            <UserRound size={19} />
            <Text>حسابي</Text>
          </HStack>
        </Link>
      </ChakraLink>
    </VStack>
  );
}
