"use client";
import { Box, Input } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MobileSearch() {
  const t = useTranslations("Navbar");
  return (
    <Box px={4} pb={4} display={{ base: "block", md: "none" }}>
      <Box position="relative">
        <Box
          position="absolute"
          top="50%"
          insetInlineStart="12px"
          transform="translateY(-50%)"
          color="gray.400"
          pointerEvents="none"
          zIndex="1"
        >
          <Search size={19} />
        </Box>

        <Input
          placeholder={t("search")}
          borderRadius="full"
          bg="gray.50"
          borderColor="gray.200"
          ps="42px"
          size="md"
          fontSize="sm"
        />
      </Box>
    </Box>
  );
}
