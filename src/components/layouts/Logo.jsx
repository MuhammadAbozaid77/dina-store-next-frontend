import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function Logo() {
  return (
    <ChakraLink
      asChild
      display="inline-flex"
      flexShrink={0}
      _hover={{ opacity: 0.85 }}
    >
      <Link href="/">
        <Image
          src="/images/logoss.jpg"
          alt="Logo"
          width={180}
          height={50}
          objectFit="contain"
        />
      </Link>
    </ChakraLink>
  );
}
