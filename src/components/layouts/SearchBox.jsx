"use client";
import { Box, Input } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function SearchBox() {
  const t = useTranslations("Navbar");

  return (
    <Box flex="1" maxW="300px" display={{ base: "none", md: "block" }}>
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
          pe="4"
          size="lg"
          fontSize="sm"
          _focusVisible={{
            borderColor: "#b92957",
            boxShadow: "0 0 0 1px #b92957",
          }}
        />
      </Box>
    </Box>
  );
}
