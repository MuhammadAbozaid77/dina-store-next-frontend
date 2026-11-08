"use client";
import { Box, Flex } from "@chakra-ui/react";
import AccountSidebar from "./_components/AccountSidebar";

export default function AccountLayout({ children }) {
  return (
    <Flex
      minH="calc(100vh - 80px)"
      bg="var(--surface-secondary)"
      direction={{ base: "column", lg: "row-reverse" }}
      dir="rtl"
      py={{ base: 5, md: 8 }}
      px={{ base: 4, md: 8 }}
      gap={6}
    >
      {/* Sidebar */}
      <AccountSidebar />

      {/* Content */}
      <Box flex="1" minW="0">
        {children}
      </Box>
    </Flex>
  );
}
