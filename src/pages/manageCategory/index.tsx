import { Box, Stack, HStack, VStack } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import HeaderManageCategory from "../../components/manageCategory/header";
import BodyManageCategory from "../../components/manageCategory/body";
import FooterManageCategory from "../../components/manageCategory/footer";

const ManageCategory = () => {
  return (
    <Box maxW='100vw' minH='100vh'>
      <HStack w="100vw" h="100vh" spacing='0' alignItems='start'>
        <Sidebar />
        <Box w="15%" h="100vh"/>
        <Box w="85%" h='100vh' bgColor="#F1F1F1" padding='48px 32px 48px 32px' display='flex' flexDirection='column' justifyContent='space-between'>
          <Box>
            <HeaderManageCategory/>
            <BodyManageCategory/>
          </Box>
          <FooterManageCategory/>
        </Box>
          
        
        {/* <Box h='200vh' bgColor='#E1D1C1' >hai</Box> */}
        {/* <Box w='20%' h='100vh' bgColor='#F0E0FB' >hola</Box> */}
      </HStack>
    </Box>
  );
};
export default ManageCategory;
