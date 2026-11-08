"use client";

import {
  Box,
  Image,
  Text,
  Badge,
  Flex,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { ExternalLink, ShoppingBag } from "lucide-react";

export default function ProductCard({ product }) {
  const imageUrl = product.api_featured_image?.startsWith("//")
    ? `https:${product.api_featured_image}`
    : product.api_featured_image || product.image_link;

  const price = Number(product.price);

  return (
    <Box
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.200"
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 12px 30px rgba(145, 35, 69, 0.12)",
        borderColor: "#912345",
      }}
    >
      {/* Product Image */}
      <Box position="relative" bg="gray.50" overflow="hidden">
        <Image
          src={imageUrl}
          alt={product.name}
          w="100%"
          h="260px"
          objectFit="contain"
          p={4}
          loading="lazy"
        />

        <Badge
          position="absolute"
          top={3}
          left={3}
          bg="#fff0f4"
          color="#912345"
          px={3}
          py={1}
          borderRadius="full"
          textTransform="capitalize"
        >
          {product.category || product.product_type || "Beauty"}
        </Badge>
      </Box>

      {/* Product Details */}
      <VStack align="stretch" gap={3} p={4}>
        <Text
          fontSize="xs"
          fontWeight="semibold"
          color="#912345"
          textTransform="uppercase"
          letterSpacing="wider"
        >
          {product.brand || "Unknown Brand"}
        </Text>

        <Text
          fontSize="md"
          fontWeight="bold"
          color="gray.800"
          lineClamp={1}
          title={product.name}
        >
          {product.name}
        </Text>

        <Text fontSize="sm" color="gray.500" lineClamp={2} minH="40px">
          {product.description || "Discover this beauty product."}
        </Text>

        <Flex justify="space-between" align="center" gap={2}>
          <Text fontSize="xl" fontWeight="bold" color="#912345">
            {Number.isFinite(price)
              ? `$${price.toFixed(2)}`
              : "Price unavailable"}
          </Text>

          {product.product_colors?.length > 0 && (
            <Text fontSize="xs" color="gray.500">
              {product.product_colors.length} colors
            </Text>
          )}
        </Flex>

        <HStack gap={2}>
          <Button
            as="a"
            href={product.product_link || product.website_link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            flex={1}
            bg="#912345"
            color="white"
            _hover={{ bg: "#741b36" }}
          >
            <ExternalLink size={16} />
            View Product
          </Button>

          <Button
            variant="outline"
            borderColor="#912345"
            color="#912345"
            aria-label="Product details"
            onClick={() => {
              console.log("Product:", product);
            }}
          >
            <ShoppingBag size={18} />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
