"use client";
import Container from "@/components/ui/Container";
import { accountCards } from "@/utils/accountLinks";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import AccountSmallCard from "./_components/AccountSmallCard";

export default function AccountPage() {
  return (
    <Container
      bg="white"
      border="1px solid var(--border)"
      borderRadius="var(--radius-xl)"
      p={{ base: 5, md: 8 }}
    >
      {/* Header */}
      <Box mb={8}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color="var(--foreground)"
          mb={2}
          fontWeight={700}
        >
          حسابي
        </Text>

        <Text color="var(--text-secondary)" fontSize="sm">
          أهلاً بك محمد، يمكنك إدارة حسابك وطلباتك من هنا.
        </Text>
      </Box>

      {/* Cards */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={4}>
        {/* Settings */}
        {accountCards?.map((item) => {
          return <AccountSmallCard item={item} key={item.icon} />;
        })}
      </SimpleGrid>
    </Container>
  );
}
