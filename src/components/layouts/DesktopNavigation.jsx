"use client";
import {
  Box,
  HStack,
  Text,
  Link as ChakraLink,
  SimpleGrid,
  Separator,
} from "@chakra-ui/react";
import { ChevronLeft, ArrowLeft } from "lucide-react";
import { allCategories } from "@/utils/links";
import { Link } from "@/i18n/navigation";

export default function DesktopNavigation({
  pathname,
  hoveredCategory,
  setHoveredCategory,
}) {
  //===================================================
  const activeCategory = allCategories.find(
    (item) => item.slug === hoveredCategory,
  );
  //===================================================
  return (
    <Box display={{ base: "none", lg: "block" }}>
      <HStack gap={6}>
        {allCategories.map((item) => (
          <ChakraLink
            key={item.slug}
            asChild
            onMouseEnter={() => setHoveredCategory(item.slug)}
            fontWeight={pathname.includes(item.slug) ? "bold" : "medium"}
            color={pathname.includes(item.slug) ? "#912345" : "gray.700"}
            _hover={{ color: "#912345", textDecoration: "none" }}
          >
            <Link href={`/categories/${item.slug}`}>{item.title}</Link>
          </ChakraLink>
        ))}
      </HStack>

      {activeCategory && (
        <Box
          position="absolute"
          top="100%"
          left="0"
          right="0"
          zIndex={100}
          bg="white"
          borderTopWidth="1px"
          borderColor="gray.100"
          boxShadow="0 10px 25px rgba(0,0,0,0.08)"
        >
          <Box maxW="1440px" mx="auto" px={{ base: 4, md: 8 }} py={6}>
            <HStack justify="space-between" mb={5}>
              <Text fontSize="xl" fontWeight="bold" color="#912345">
                {activeCategory.title}
              </Text>

              <ChakraLink asChild color="#912345" fontWeight="semibold">
                <Link href={`/categories/${activeCategory.slug}`}>
                  عرض الكل <ArrowLeft size={16} />
                </Link>
              </ChakraLink>
            </HStack>

            <Separator mb={5} />

            <SimpleGrid columns={3} gap={3}>
              {activeCategory.subCategories.map((sub) => (
                <ChakraLink
                  key={sub.slug}
                  asChild
                  p={3}
                  borderRadius="lg"
                  bg="pink.100"
                  color="gray.700"
                  fontSize="sm"
                  fontWeight="500"
                  _hover={{
                    bg: "pink.200",
                    color: "#912345",
                    textDecoration: "none",
                  }}
                >
                  <Link href={`/categories/${activeCategory.slug}/${sub.slug}`}>
                    <HStack justifyContent="space-between" w="full">
                      <Text>{sub.title}</Text>
                      <ChevronLeft size={16} />
                    </HStack>
                  </Link>
                </ChakraLink>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      )}
    </Box>
  );
}
