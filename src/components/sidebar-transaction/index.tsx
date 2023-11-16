import { Box, Text, Image, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconBox, IconLayoutDashboard} from '@tabler/icons-react';
import { IconChevronRight, IconChevronLeft  } from '@tabler/icons-react';
import { BsBag } from "react-icons/bs";

const Sidebar = () => {
  const [activeUser, setActiveUser] = useState("");
  const [activeMenu, setActiveMenu] = useState("dash");
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  // const [activeSubProduct, setActiveSubProduct] = useState("product-list");

  const handleUserClick = (user: string) => {
    setActiveUser(user);
    
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    if (showProductDropdown === true) {
      setShowProductDropdown(false)
      // setActiveSubProduct("product-list")
    } else if (activeUser === "profile") {
      setActiveUser("")
    }
  };
  
  // const handleProductClick = () => {
  //   setShowProductDropdown(!showProductDropdown);
  // };

  // const handleSubProductClick = (menu: string) => {
  //   setActiveSubProduct(menu);
  // };

  return (
    <Box boxShadow="md" w="15%" h="100vh" bgColor="#ffffff">
      <Box
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        paddingBottom="32px"
      >
        <Box display="flex" flexDirection="column" gap="45px">
          <Link to={""}>
            <HStack spacing="0" padding="32px 0 0 24px">
              <Image src="../../../public/images/logo.png" />
              <Text
                fontFamily="Paytone One"
                fontSize="32px"
                color="#FF7940"
                fontWeight="400"
              >
                Poja
              </Text>
            </HStack>
          </Link>
          <Box display="flex" flexDirection="column" gap="10px">
            <Link to={""}>
              <HStack
                style={{
                  color: activeMenu === "dash" ? "#FF7940" : "#707070",
                  backgroundColor:
                    activeMenu === "dash" ? "#FFF7F3" : "transparent",
                }}
                onClick={() => handleMenuClick("dash")}
                w="full"
                h="56px"
                gap="18px"
              >
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#FF7940"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "dash" ? "visible" : "hidden",
                  }}
                />
                <IconLayoutDashboard stroke={1.5} size="24px" />
                <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                  Menu
                </Text>
              </HStack>
            </Link>
            <Link to={""}>
              <HStack
                style={{
                  color: activeMenu === "dash" ? "#FF7940" : "#707070",
                  backgroundColor:
                    activeMenu === "dash" ? "#FFF7F3" : "transparent",
                }}
                onClick={() => handleMenuClick("dash")}
                w="full"
                h="56px"
                gap="18px"
              >
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#FF7940"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "dash" ? "visible" : "hidden",
                  }}
                />
                <IconBox stroke={1.5} size="24px" />
                <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                  Product
                </Text>
              </HStack>
            </Link>
            <Link to={""}>
              <HStack
                style={{
                  color: activeMenu === "dash" ? "#FF7940" : "#707070",
                  backgroundColor:
                    activeMenu === "dash" ? "#FFF7F3" : "transparent",
                }}
                onClick={() => handleMenuClick("dash")}
                w="full"
                h="56px"
                gap="18px"
              >
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#FF7940"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "dash" ? "visible" : "hidden",
                  }}
                />
                <BsBag stroke={1.5} size="24px" />
                <Text fontFamily="Nunito" fontSize="18px" fontWeight="600">
                  Orders
                </Text>
              </HStack>
            </Link>
          </Box>
        </Box>
        <Box>
          <Link to={""}>
            <HStack
              style={{
                color: activeUser === "profile" ? "#FF7940" : "#707070",
                backgroundColor:
                  activeUser === "profile" ? "#FFF7F3" : "transparent",
              }}
              onClick={() => handleUserClick("profile")}
              w="full"
              h="56px"
              gap="18px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap="18px" alignItems="center">
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#FF7940"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeUser === "profile" ? "visible" : "hidden",
                  }}
                />
                <Box
                  w="30px"
                  h="30px"
                  bgColor="#D9D9D9"
                  borderRadius="50%"
                ></Box>
                <Text
                  fontFamily="Nunito"
                  fontSize="16px"
                  fontWeight="600"
                  isTruncated
                >
                  Fransisca Angelica
                </Text>
              </Box>
              <Box padding="0 10px 0 0">
                {activeUser === "profile" ? (
                  <IconChevronLeft size="18px" />
                ) : (
                  <IconChevronRight size="18px" />
                )}
              </Box>
            </HStack>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
