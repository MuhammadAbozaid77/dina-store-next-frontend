"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function UserHeader() {
  const t = useTranslations();
  //============================================
  return (
    <Flex
      align="center"
      gap={3}
      px={3}
      pb={5}
      mb={3}
      borderBottom="1px solid var(--border)"
    >
      <Flex
        w="48px"
        h="48px"
        flexShrink={0}
        align="center"
        justify="center"
        bg="var(--primary-light)"
        color="var(--primary)"
        borderRadius="full"
        fontWeight="bold"
        fontSize="lg"
      >
        م
      </Flex>
      <Box>
        <Text fontWeight="bold" color="var(--foreground)">
          محمد
        </Text>

        <Text fontSize="xs" color="var(--text-muted)">
          {t("account.welcome")}
        </Text>
      </Box>
    </Flex>
  );
}
