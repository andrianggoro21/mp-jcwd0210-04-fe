import { Box, Stack, HStack, VStack } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import HeaderManageProduct from "../../components/manageProduct/header";
import BodyManageProduct from "../../components/manageProduct/body";
import FooterManageProduct from "../../components/manageProduct/footer";

const ManageProduct = () => {
  return (
    <Box maxW='100vw' minH='100vh'>
      <HStack w="100vw" h="100vh" spacing='0' alignItems='start'>
        <Sidebar />
        <Box w="15%" h="100vh"/>
        <Box w="85%" h='100vh' bgColor="#F1F1F1" padding='48px 32px 48px 32px' display='flex' flexDirection='column' justifyContent='space-between'>
          <Box>
            <HeaderManageProduct/>
            <BodyManageProduct/>
          </Box>
          <FooterManageProduct/>
        </Box>
          
        
        {/* <Box h='200vh' bgColor='#E1D1C1' >hai</Box> */}
        {/* <Box w='20%' h='100vh' bgColor='#F0E0FB' >hola</Box> */}
      </HStack>
    </Box>
  );
};
export default ManageProduct;
