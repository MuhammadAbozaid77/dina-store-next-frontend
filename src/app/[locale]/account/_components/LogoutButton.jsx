"use client";
import { Box, Button } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { LuLogOut } from "react-icons/lu";

export default function LogoutButton() {
  const t = useTranslations();
  const router = useRouter();
  //=====================================================
  const handleLogout = () => {
    // Clear auth token / cookie here
    router.push("/login");
  };
  //=====================================================
  return (
    <Box mt={4} pt={4} borderTop="1px solid var(--border)">
      <Button
        w="100%"
        justifyContent="flex-start"
        gap={3}
        h="46px"
        px={4}
        bg="transparent"
        color="#dc3545"
        borderRadius="var(--radius-md)"
        fontWeight="medium"
        onClick={handleLogout}
        _hover={{
          bg: "#fff1f2",
          color: "#dc3545",
        }}
      >
        <LuLogOut size={19} />
        {t("account.logout")}
      </Button>
    </Box>
  );
}
