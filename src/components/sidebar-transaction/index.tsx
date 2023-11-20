import {
  Box,
  Text,
  Image,
  Button,
  VStack,
  Divider,
  AspectRatio,
  Input,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconBox, IconLayoutDashboard } from "@tabler/icons-react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import { BsBag, BsPersonCircle } from "react-icons/bs";

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
      setShowProductDropdown(false);
      // setActiveSubProduct("product-list")
    } else if (activeUser === "profile") {
      setActiveUser("");
    }
  };

  // const handleProductClick = () => {
  //   setShowProductDropdown(!showProductDropdown);
  // };

  // const handleSubProductClick = (menu: string) => {
  //   setActiveSubProduct(menu);
  // };

  const { isOpen, onOpen, onClose } = useDisclosure();

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
              // onClick={() => handleUserClick("profile")}
              w="full"
              h="56px"
              gap="18px"
              alignItems="center"
              justifyContent="space-between"
            >
              {/* <Button onClick={onOpen}>Open Modal</Button> */}

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {/* <Lorem count={2} /> */}
                    <Box>
                      <VStack align={"stretch"}>
                        <Center>
                          <Box p={"0 .5em"}>
                            <VStack align={"stretch"} spacing={"1em"}>
                              <Box>
                                <Text>Profile Picture</Text>
                              </Box>
                              <Box>
                                <AspectRatio
                                  width={{ base: "20", md: "40" }}
                                  ratio={1}
                                >
                                  <Box
                                    borderColor="gray.300"
                                    borderStyle="dashed"
                                    borderWidth="2px"
                                    borderRadius={"50%"}
                                    shadow="sm"
                                    _hover={{ shadow: "md" }}
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                  >
                                    <Box
                                      position="relative"
                                      height="100%"
                                      width="100%"
                                      display={"flex"}
                                      alignItems={"center"}
                                      justifyContent={"center"}
                                    >
                                      <Box>
                                        <Image />
                                      </Box>
                                      <Box
                                        height="100%"
                                        width="100%"
                                        display="flex"
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                      ></Box>
                                      <Box
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        opacity="0.2"
                                      >
                                        <BsPersonCircle fontSize={"40px"} />
                                      </Box>
                                      <Input
                                        type="file"
                                        height="100%"
                                        width="100%"
                                        position="absolute"
                                        top="0"
                                        left="0"
                                        opacity="0"
                                        aria-hidden="true"
                                        accept="image/*"
                                      />
                                    </Box>
                                  </Box>
                                </AspectRatio>
                                <Box
                                  position={"absolute"}
                                  display={"flex"}
                                  gap={2}
                                  mt={"10px"}
                                >
                                  <Button size={"sm"} w={"70px"}>
                                    Remove
                                  </Button>
                                  <Button size={"sm"} w={"70px"}>
                                    Submit
                                  </Button>
                                </Box>
                              </Box>
                            </VStack>
                          </Box>
                        </Center>
                      </VStack>
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Box mt={"40px"}>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Secondary Action</Button>
                    </Box>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button onClick={onOpen}>
                <Box
                  display="flex"
                  gap="18px"
                  alignItems="center"
                >
                  <Box
                    w="5px"
                    h="56px"
                    bgColor="#FF7940"
                    borderTopRightRadius="5px"
                    borderBottomRightRadius="5px"
                    style={{
                      visibility:
                        activeUser === "profile" ? "visible" : "hidden",
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
              </Button>
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
