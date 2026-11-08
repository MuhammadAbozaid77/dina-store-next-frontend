"use client";
import { usePathname } from "@/i18n/navigation";
import { navigation } from "@/utils/accountLinks";
import { Button, VStack } from "@chakra-ui/react";

export default function NavigationLinks() {
  const pathname = usePathname();
  //==================================================
  return (
    <VStack align="stretch" gap={1}>
      {navigation.map((item) => {
        const Icon = item.icon;

        const isActive =
          item.href === "/account"
            ? pathname === "/account"
            : pathname.startsWith(item.href);

        return (
          <Button
            key={item.href}
            justifyContent="flex-start"
            gap={3}
            h="46px"
            px={4}
            borderRadius="var(--radius-md)"
            bg={isActive ? "var(--primary-light)" : "transparent"}
            color={isActive ? "var(--primary)" : "var(--text-secondary)"}
            fontWeight={isActive ? "bold" : "medium"}
            onClick={() => router.push(item.href)}
            _hover={{
              bg: "var(--primary-light)",
              color: "var(--primary)",
            }}
          >
            <Icon size={19} />

            {item.label}
          </Button>
        );
      })}
    </VStack>
  );
}
