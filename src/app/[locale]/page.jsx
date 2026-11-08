"use client";
import ProductCard from "@/components/shared/ProductCard";
import TopSeller from "@/components/shared/TopSeller";
import useGetProducts from "@/hooks/useGetProducts";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function HomePage() {
  const { data } = useGetProducts();
  console.log("data", data);
  const data20 = data?.slice(0, 20);
  console.log("data100", data20);

  return (
    <Box m={10} >
      {/* <TopSeller /> */}

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
        {data20?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
