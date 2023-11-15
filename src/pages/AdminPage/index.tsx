import { useDisclosure, Box, Stack, HStack, VStack } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import HeaderManageProduct from "../../components/manageProduct/header";
import BodyManageProduct from "../../components/manageProduct/body";
import FooterManageProduct from "../../components/manageProduct/footer";
import ModalCreateProduct from "../../components/modal/createProduct";
import { useState } from "react";


const AdminPage = (prop: any) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box maxW='100vw' minH='100vh'>
      <HStack w="100vw" h="100vh" spacing='0' alignItems='start'>
        <Sidebar />
        <Box w="15%" h="100vh"/>
        <Box w="85%" h='100vh' bgColor="#F1F1F1" padding='48px 32px 48px 32px' display='flex' flexDirection='column' justifyContent='space-between'>
          <Box>
            {/* <HeaderManageProduct onOpen={onOpen}/> */}
            {prop.viewHeader}
            {/* <BodyManageProduct/> */}
            {prop.viewBody}
            {/* <ModalCreateProduct isOpen={isOpen} onClose={onClose} /> */}
          </Box>
          {/* <FooterManageProduct/> */}
          {prop.viewFooter}
        </Box>
      </HStack>
    </Box>
  );
};
export default AdminPage;
