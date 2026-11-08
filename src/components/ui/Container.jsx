import { Box } from "@chakra-ui/react";

export default function Container({ children }) {
  return (
    <Box maxW="1440px" mx="auto" px={{ base: 4, md: 8 }} py={4}>
      {children}
    </Box>
  );
}
