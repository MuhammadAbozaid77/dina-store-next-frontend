"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Link as ChakraLink,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link } from "@/i18n/navigation";
import { ArrowUpLeft, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const ArrowIcon = isArabic ? ArrowUpLeft : ArrowUpRight;

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("shop"), href: "/shop" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  const helpLinks = [
    { label: t("faq"), href: "/faq" },
    { label: t("shipping"), href: "/shipping" },
    { label: t("returns"), href: "/returns" },
    { label: t("privacy"), href: "/privacy" },
  ];

  const socialLinks = [
    { icon: BsFacebook, href: "#", label: "Facebook" },
    { icon: BsInstagram, href: "#", label: "Instagram" },
    { icon: BsTwitter, href: "#", label: "Twitter" },
    { icon: BsYoutube, href: "#", label: "YouTube" },
  ];

  const footerLinkStyles = {
    color: "gray.500",
    fontSize: "sm",
    transition: "color 0.2s",
    _hover: {
      color: "teal.600",
      textDecoration: "none",
    },
  };

  return (
    <Box as="footer" bg="#490e20" color="white">
      <Container maxW="7xl" py={{ base: 10, md: 14 }}>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "2fr 1fr 1fr 1.5fr",
          }}
          gap={{ base: 10, lg: 8 }}
        >
          {/* Brand */}
          <VStack align="start" gap={5}>
            <ChakraLink
              asChild
              display="inline-flex"
              _hover={{ opacity: 0.85 }}
            >
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={140}
                  height={60}
                  style={{
                    width: "140px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </ChakraLink>

            <Text color="gray.400" fontSize="sm" lineHeight="1.9">
              {t("description")}
            </Text>

            <HStack gap={3}>
              {socialLinks.map(({ icon: SocialIcon, href, label }) => (
                <ChakraLink
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="10"
                  h="10"
                  rounded="full"
                  bg="whiteAlpha.100"
                  color="white"
                  transition="all 0.2s"
                  _hover={{
                    bg: "teal.500",
                    transform: "translateY(-3px)",
                  }}
                >
                  <SocialIcon size={18} />
                </ChakraLink>
              ))}
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="start" gap={4}>
            <Heading as="h3" fontSize="md" fontWeight="bold">
              {t("quickLinks")}
            </Heading>

            <VStack align="start" gap={3}>
              {quickLinks.map((item) => (
                <ChakraLink key={item.href} asChild {...footerLinkStyles}>
                  <Link href={item.href}>{item.label}</Link>
                </ChakraLink>
              ))}
            </VStack>
          </VStack>

          {/* Help */}
          <VStack align="start" gap={4}>
            <Heading as="h3" fontSize="md" fontWeight="bold">
              {t("customerService")}
            </Heading>

            <VStack align="start" gap={3}>
              {helpLinks.map((item) => (
                <ChakraLink key={item.href} asChild {...footerLinkStyles}>
                  <Link href={item.href}>{item.label}</Link>
                </ChakraLink>
              ))}
            </VStack>
          </VStack>

          {/* Contact & Newsletter */}
          <VStack align="start" gap={5}>
            <Heading as="h3" fontSize="md" fontWeight="bold">
              {t("contactUs")}
            </Heading>

            <VStack align="start" gap={3} w="full">
              <HStack align="start" gap={3}>
                <MapPin size={18} className="shrink-0" />

                <Text color="gray.400" fontSize="sm">
                  {t("address")}
                </Text>
              </HStack>

              <HStack align="center" gap={3}>
                <Phone size={18} />

                <ChakraLink href="tel:+201000000000" {...footerLinkStyles}>
                  +20 100 000 0000
                </ChakraLink>
              </HStack>

              <HStack align="center" gap={3}>
                <Mail size={18} />

                <ChakraLink
                  href="mailto:info@example.com"
                  {...footerLinkStyles}
                >
                  info@example.com
                </ChakraLink>
              </HStack>
            </VStack>

            <Box w="full">
              <Text fontSize="sm" fontWeight="semibold" mb={3}>
                {t("newsletter")}
              </Text>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <Flex gap={2} direction={{ base: "column", sm: "row" }}>
                  <Input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    required
                    bg="whiteAlpha.100"
                    borderColor="whiteAlpha.200"
                    color="white"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{ borderColor: "teal.400" }}
                    _focusVisible={{
                      borderColor: "teal.400",
                      boxShadow: "0 0 0 1px var(--chakra-colors-teal-400)",
                    }}
                  />

                  <Button
                    type="submit"
                    bg="teal.500"
                    color="white"
                    _hover={{ bg: "teal.600" }}
                    flexShrink={0}
                  >
                    {t("subscribe")}
                    <ArrowIcon size={16} />
                  </Button>
                </Flex>
              </form>
            </Box>
          </VStack>
        </Grid>

        <Separator my={10} borderColor="whiteAlpha.200" />

        {/* Bottom Footer */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
          textAlign="center"
        >
          <Text color="gray.500" fontSize="sm">
            © {new Date().getFullYear()} {t("copyright")}
          </Text>

          <HStack gap={5} justify="center" flexWrap="wrap">
            <ChakraLink asChild {...footerLinkStyles}>
              <Link href="/privacy">{t("privacy")}</Link>
            </ChakraLink>

            <ChakraLink asChild {...footerLinkStyles}>
              <Link href="/terms">{t("terms")}</Link>
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
