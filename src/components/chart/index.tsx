// import { Box, HStack, IconButton, Image, VStack, Text } from "@chakra-ui/react";
// import { BsFillCartPlusFill } from "react-icons/bs";
// import { useDispatch } from "react-redux";
// function ListProduct() {
//   return (
//     <Box>
//       <HStack spacing="24px">
//         <Box
//           borderRadius="1em"
//           w="240px"
//           h="320px"
//           p="2.5em 1.5em"
//           bg="lightgray"
//         >
//           <Box overflow="hidden">
//             <Image
//               borderRadius={"0.5em"}
//               border="solid 0.2em grey"
//               // src={props.img}
//               objectFit="cover"
//               w="100%"
//               h="160px"
//             />
//           </Box>
//           <VStack fontSize="sm" align="flex-end" spacing="0">
//             <Text right="20px" as="b">
//               {/* {props.itemName} */}
//             </Text>
//             <Text>ItemPrice</Text>
//             <IconButton
//               top="1.5em"
//               color="black"
//               fontSize="1.5em"
//               size="xs"
//               bgColor="transparent"
//               _hover={{ bg: "transparent" }}
//               icon={<BsFillCartPlusFill />}
//               aria-label="ariaLabel"
//             />
//           </VStack>
//         </Box>
//       </HStack>
//     </Box>
//   );
// }

// export default ListProduct;

import { useState } from "react";
import {
  Box,
  FormLabel,
  Text,
  Input,
  Grid,
  Spacer,
  Image,
  Button,
  Flex,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { PiBarcodeLight } from "react-icons/pi";
import img from "../../img/sate.jpg";

function Chart() {
  const [customerName, setCustomerName] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentProcess = () => {
    // Implement your payment processing logic here
    console.log(
      `Processing payment for ${customerName} using ${selectedPayment}`
    );
  };

  return (
    <Box>
      <Box border="1px" p={4}>
        <Flex align="center" justify="space-between" mb={4}>
          <Text fontSize="25px" fontWeight="bold">
            Order Menu
          </Text>
          <Text fontSize="25px" fontWeight="bold">
            X
          </Text>
        </Flex>
        <Box mb={4}>
          <FormLabel>Customer Name</FormLabel>
          <Input
            boxShadow="md"
            placeholder="Search Category"
            //   bgColor="lightgray"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </Box>
        <Grid
          templateColumns="150px 1fr"
          gap={4}
          h="200px"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <Box>
            <VStack align={"stretch"}>
              {/* <Flex w={"full"}> */}
              <Box>
                <Image src={img} />
              </Box>
              <Box>
                <Text>Sate Ayam Sambal Matah</Text>
                <Flex justify="space-between">
                  <Text color="#FF7940">Rp.25.000</Text>
                  {/* <Text color="#FF7940">- 1 +</Text> */}
                  {/* <HStack> */}
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    //   _hover={"none"}
                    //   active={"none"}
                    //   onClick={count !== 0 ? kurang : null}
                  >
                    <AiOutlineMinusCircle />
                  </Button>
                  {/* <Text>{count}</Text> */}
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    //   _hover={"none"}
                    //   active={"none"}
                    //   onClick={count !== 11 ? tambah : null}
                  >
                    <AiOutlinePlusCircle />
                  </Button>
                  {/* </HStack> */}
                </Flex>
              </Box>
              {/* </Flex> */}
            </VStack>
          </Box>
        </Grid>
        <Box
          maxW="300px"
          m="auto"
          p="4"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          <Box borderBottomWidth="1px" pb="2">
            <Text>
              Subtotal : Rp.50.000
              <br />
              Pajak 11% : Rp.5.500
            </Text>
          </Box>
          <Box mt="2" borderTopWidth="1px" pt="2" fontWeight="bold">
            <Text color={"#FF7940"}>Total : Rp.55.500</Text>
          </Box>
        </Box>
        <Box my={4}>
          <FormLabel>Select Payment</FormLabel>
          <Center>
            <Button
              boxShadow="md"
              leftIcon={<LiaMoneyBillWaveSolid />}
              variant="outline"
              mr={2}
              onClick={() => setSelectedPayment("Cash")}
              color={selectedPayment === "Cash" ? "#FF7940" : "black"}
            >
              Cash
            </Button>
            <Spacer />
            <Button
              boxShadow="md"
              leftIcon={<LuWallet />}
              variant="outline"
              mr={2}
              color={selectedPayment === "Debit" ? "#FF7940" : "black"}
              onClick={() => setSelectedPayment("Debit")}
            >
              Debit
            </Button>
            <Spacer />
            <Button
              boxShadow="md"
              leftIcon={<PiBarcodeLight />}
              variant="outline"
              onClick={() => setSelectedPayment("Qris")}
              color={selectedPayment === "Qris" ? "#FF7940" : "black"}
            >
              Qris
            </Button>
          </Center>
        </Box>
        <Center>
          <Button
            boxShadow="md"
            fontWeight={"bold"}
            color={"#F5F5F5"}
            _hover={{ bgColor: "#FF7940" }}
            bgColor={"#FF7940"}
            borderRadius={"18px"}
            colorScheme="orange"
            onClick={handlePaymentProcess}
            outline={"none"}
          >
            PROCESS PAYMENT
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default Chart;
