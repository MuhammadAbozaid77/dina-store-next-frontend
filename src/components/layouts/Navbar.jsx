// "use client";
// import { useState } from "react";
// import { Box, Flex } from "@chakra-ui/react";
// import { usePathname } from "@/i18n/navigation";
// import Logo from "./Logo";
// import SearchBox from "./SearchBox";
// import DesktopNavigation from "./DesktopNavigation";
// import DesktopNavbarActions from "./DesktopNavbarActions";
// import MobileSearch from "./MobileSearch";
// import MobileNavigation from "./MobileNavigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   //===================================================
//   return (
//     <Box
//       as="header"
//       position="sticky"
//       top="0"
//       zIndex="100"
//       bg="white"
//       borderBottomWidth="1px"
//       borderColor="gray.100"
//       boxShadow="0 2px 15px rgba(0,0,0,0.04)"
//       color="gray.800"
//     >
//       {/* Main Navbar */}
//       <Flex
//         maxW="1440px"
//         mx="auto"
//         px={{ base: 4, md: 8 }}
//         py={4}
//         align="center"
//         justify="space-between"
//         gap={6}
//       >
//         {/* Logo */}
//         <Logo />
//         {/* Desktop Navigation */}
//         <DesktopNavigation pathname={pathname} />
//         {/* Search */}
//         <SearchBox />
//         {/* Actions */}
//         <DesktopNavbarActions menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//       </Flex>

//       {/* Mobile Search */}
//       <MobileSearch />
//       {/* Mobile Navigation */}
//       {menuOpen && <MobileNavigation />}
//     </Box>
//   );
// }

"use client";
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { usePathname } from "@/i18n/navigation";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import DesktopNavigation from "./DesktopNavigation";
import DesktopNavbarActions from "./DesktopNavbarActions";
import MobileSearch from "./MobileSearch";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  const pathname = usePathname();
  //   //===================================================
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  //   //===================================================
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="100"
      bg="white"
      borderBottomWidth="1px"
      borderColor="gray.100"
      boxShadow="0 2px 15px rgba(0,0,0,0.04)"
      color="gray.800"
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <Flex
        maxW="1440px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
        gap={6}
      >
        <Logo />
        {/* Desktop */}
        <DesktopNavigation
          pathname={pathname}
          hoveredCategory={hoveredCategory}
          setHoveredCategory={setHoveredCategory}
        />
        <SearchBox />
        <DesktopNavbarActions menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Flex>
      {/* Mobile */}
      <MobileSearch />
      {menuOpen && <MobileNavigation setMenuOpen={setMenuOpen} />}
    </Box>
  );
}
