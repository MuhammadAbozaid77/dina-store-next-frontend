"use client";
import { Box } from "@chakra-ui/react";
import NavigationLinks from "./NavigationLinks";
import LogoutButton from "./LogoutButton";
import UserHeader from "./UserHeader";

export default function AccountSidebar() {
  return (
    <Box
      w={{ base: "100%", lg: "270px" }}
      flexShrink={0}
      bg="white"
      border="1px solid var(--border)"
      borderRadius="var(--radius-xl)"
      p={4}
      boxShadow="var(--shadow-sm)"
      h="fit-content"
    >
      {/* User Header */}
      <UserHeader />
      {/* Navigation */}
      <NavigationLinks />
      {/* Logout */}
      <LogoutButton />
    </Box>
  );
}
