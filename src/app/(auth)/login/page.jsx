"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { LuMail, LuLock, LuEye, LuEyeOff, LuPhone } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [method, setMethod] = useState("email");
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (method === "email") {
      console.log({ email, password });
      // Connect email login API here
    } else {
      console.log({ phone });
      // Connect phone OTP API here
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/login/google";
  };

  return (
    <Flex
      minH="100vh"
      direction="column"
      align="center"
      justify="center"
      bg="var(--surface-secondary)"
      px={4}
      py={10}
      dir="rtl"
    >
      {/* Login Card */}
      <Box
        w="100%"
        maxW="440px"
        bg="white"
        border="1px solid var(--border)"
        borderRadius="var(--radius-xl)"
        boxShadow="var(--shadow-md)"
        p={{ base: 6, md: 9 }}
      >
        {/* Header */}
        <VStack gap={1} mb={8}>
          <Image src="/images/logoss.jpg" alt="" width={200} height={100} />
          <Heading fontSize="xl" color="var(--text-secondary)">
            مرحباً بعودتك
          </Heading>
          <Text fontSize="sm" color="var(--text-secondary)">
            سجلي الدخول للمتابعة إلى حسابك
          </Text>
        </VStack>

        {/* Login Methods */}
        <HStack
          bg="var(--surface-secondary)"
          p={1}
          borderRadius="var(--radius-md)"
          mb={6}
          gap={1}
        >
          <Button
            flex={1}
            size="md"
            bg={method === "email" ? "white" : "transparent"}
            color={
              method === "email" ? "var(--primary)" : "var(--text-secondary)"
            }
            boxShadow={method === "email" ? "var(--shadow-sm)" : "none"}
            onClick={() => setMethod("email")}
            _hover={{ bg: "var(--primary-soft)" }}
          >
            <LuMail />
            البريد الإلكتروني
          </Button>

          <Button
            flex={1}
            size="md"
            bg={method === "phone" ? "white" : "transparent"}
            color={
              method === "phone" ? "var(--primary)" : "var(--text-secondary)"
            }
            boxShadow={method === "phone" ? "var(--shadow-sm)" : "none"}
            onClick={() => setMethod("phone")}
            _hover={{ bg: "var(--primary-soft)" }}
          >
            <LuPhone />
            رقم الهاتف
          </Button>
        </HStack>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <VStack align="stretch" gap={5}>
            {method === "email" ? (
              <>
                {/* Email */}
                <Box>
                  <Text fontSize="sm" fontWeight="semibold" mb={2}>
                    البريد الإلكتروني
                  </Text>

                  <Box position="relative">
                    <Box
                      position="absolute"
                      top="50%"
                      right="14px"
                      transform="translateY(-50%)"
                      color="var(--text-muted)"
                      zIndex={1}
                    >
                      <LuMail size={18} />
                    </Box>

                    <Input
                      type="email"
                      placeholder="أدخلي بريدك الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      h="48px"
                      ps="42px"
                      borderColor="var(--border)"
                      borderRadius="var(--radius-md)"
                      dir="rtl"
                      _focus={{
                        borderColor: "var(--primary)",
                        boxShadow: "0 0 0 1px var(--primary)",
                      }}
                    />
                  </Box>
                </Box>

                {/* Password */}
                <Box>
                  <Flex justify="space-between" mb={2}>
                    <Text fontSize="sm" fontWeight="semibold">
                      كلمة المرور
                    </Text>

                    <Link
                      href="/forgot-password"
                      style={{
                        fontSize: "12px",
                        color: "var(--primary)",
                        fontWeight: 600,
                      }}
                    >
                      نسيت كلمة المرور؟
                    </Link>
                  </Flex>

                  <Box position="relative">
                    <Box
                      position="absolute"
                      top="50%"
                      right="14px"
                      transform="translateY(-50%)"
                      color="var(--text-muted)"
                      zIndex={1}
                    >
                      <LuLock size={18} />
                    </Box>

                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="أدخلي كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      h="48px"
                      ps="42px"
                      pe="42px"
                      borderColor="var(--border)"
                      borderRadius="var(--radius-md)"
                      dir="rtl"
                      _focus={{
                        borderColor: "var(--primary)",
                        boxShadow: "0 0 0 1px var(--primary)",
                      }}
                    />

                    <Button
                      type="button"
                      position="absolute"
                      top="50%"
                      left="8px"
                      transform="translateY(-50%)"
                      minW="32px"
                      h="32px"
                      p={0}
                      bg="transparent"
                      color="var(--text-muted)"
                      onClick={() => setShowPassword(!showPassword)}
                      _hover={{
                        bg: "transparent",
                        color: "var(--primary)",
                      }}
                    >
                      {showPassword ? <LuEyeOff /> : <LuEye />}
                    </Button>
                  </Box>
                </Box>

                {/* Remember Me */}
                <Flex align="center" gap={2}>
                  <input
                    type="checkbox"
                    id="remember"
                    style={{ accentColor: "var(--primary)" }}
                  />

                  <label
                    htmlFor="remember"
                    style={{
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                    }}
                  >
                    تذكرني
                  </label>
                </Flex>
              </>
            ) : (
              /* Phone */
              <Box>
                <Text fontSize="sm" fontWeight="semibold" mb={2}>
                  رقم الهاتف
                </Text>

                <Box position="relative">
                  <Box
                    position="absolute"
                    top="50%"
                    right="14px"
                    transform="translateY(-50%)"
                    color="var(--text-muted)"
                    zIndex={1}
                  >
                    <LuPhone size={18} />
                  </Box>

                  <Input
                    type="tel"
                    placeholder="أدخلي رقم هاتفك"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    h="48px"
                    ps="42px"
                    borderColor="var(--border)"
                    borderRadius="var(--radius-md)"
                    dir="rtl"
                    _focus={{
                      borderColor: "var(--primary)",
                      boxShadow: "0 0 0 1px var(--primary)",
                    }}
                  />
                </Box>

                <Text mt={2} fontSize="xs" color="var(--text-muted)">
                  سيتم إرسال رمز تحقق إلى رقم هاتفك.
                </Text>
              </Box>
            )}

            {/* Submit */}
            <Button
              type="submit"
              w="100%"
              h="50px"
              bg="var(--primary)"
              color="white"
              borderRadius="var(--radius-md)"
              fontWeight="bold"
              fontSize="md"
              _hover={{
                bg: "var(--primary-hover)",
                transform: "translateY(-1px)",
              }}
            >
              {method === "email" ? "تسجيل الدخول" : "المتابعة برقم الهاتف"}
            </Button>
          </VStack>
        </form>

        {/* Divider */}
        <Flex align="center" gap={3} my={6}>
          <Box flex={1} h="1px" bg="var(--border)" />

          <Text fontSize="xs" color="var(--text-muted)">
            أو
          </Text>

          <Box flex={1} h="1px" bg="var(--border)" />
        </Flex>

        {/* Google Login */}
        <Button
          w="100%"
          h="48px"
          variant="outline"
          borderColor="var(--border)"
          color="var(--foreground)"
          borderRadius="var(--radius-md)"
          onClick={handleGoogleLogin}
          _hover={{
            bg: "var(--surface-secondary)",
            borderColor: "var(--primary)",
          }}
        >
          <FcGoogle size={20} />
          المتابعة باستخدام Google
        </Button>

        {/* Register */}
        <Flex justify="center" align="center" gap={1} mt={7}>
          <Text fontSize="sm" color="var(--text-secondary)">
            ليس لديك حساب؟
          </Text>

          <Link
            href="/register"
            style={{
              fontSize: "14px",
              color: "var(--primary)",
              fontWeight: 700,
            }}
          >
            إنشاء حساب
          </Link>
        </Flex>
      </Box>

      {/* Footer */}
      <Text mt={6} fontSize="xs" color="var(--text-muted)">
        © {new Date().getFullYear()} Welcome Store. جميع الحقوق محفوظة
      </Text>
    </Flex>
  );
}
