"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function AccountSmallCard({ item }) {
  const t = useTranslations();
  //=====================================================
  return (
    <Flex
      bg={"white"}
      align="center"
      gap={4}
      p={5}
      border="1px solid var(--border)"
      borderRadius="var(--radius-lg)"
      cursor="pointer"
      transition="0.2s"
      _hover={{
        borderColor: "var(--primary)",
        transform: "translateY(-2px)",
      }}
    >
      <Flex
        w="48px"
        h="48px"
        align="center"
        justify="center"
        bg="var(--primary-light)"
        color="var(--primary)"
        borderRadius="14px"
      >
        <item.icon size={21} />
      </Flex>

      <Box>
        <Text fontWeight="bold"> {t(`${item.name}`)} </Text>
        <Text fontSize="xs" color="var(--text-muted)" mt={1}>
          {t(`${item.desc}`)}
        </Text>
      </Box>
    </Flex>
  );
}
