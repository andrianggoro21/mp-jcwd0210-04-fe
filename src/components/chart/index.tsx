

import { useState } from "react";
import {
  Box,
  FormLabel,
  Text,
  Input,
  Spacer,
  Image,
  Button,
  Flex,
  Center,
  HStack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { PiBarcodeLight } from "react-icons/pi";
import img from "../../img/sate.jpg";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function Chart() {
  const [customerName, setCustomerName] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentProcess = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/payment", {
        customerName,
        selectedPayment,
      });

      if (response.status === 200) {
        console.log("Payment successful!");
      } else {
        console.error("Payment failed");
      }
    } catch (error) {
      console.error("Error processing payment", error);
    }
  };

  return (
    <Box boxShadow="md" p={"4"} h={"100vh"} w={"50%"}>
      <Flex align="center" justify="space-between" mb={4}>
        <Center>
          <Text color="black" fontSize="25px" fontWeight="bold">
            Order Menu
          </Text>
        </Center>
        <Text color="#FF7940" fontSize="20px" fontWeight="bold">
          X
        </Text>
      </Flex>
      <Box mb={4}>
        <FormLabel>Customer Name</FormLabel>
        <Input
          maxW="300px"
          boxShadow="md"
          placeholder="Search Category"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </Box>
      <Box mt={"30px"} border="md">
        <HStack align={"stretch"}>
          <Box>
            <Image src={img} boxSize={"10em"} h={"75px"} />
          </Box>
          <VStack align={"stretch"} spacing={"0em"}>
            <Text textColor={"black"}>Sate Ayam</Text>
            <Text color="#FF7940">Rp.25.000</Text>
          </VStack>
          <VStack>
            <HStack spacing={"0"}>
              <IconButton
                aria-label="Minus"
                icon={<FaMinusCircle />}
                variant={"ghost"}
                size={"md"}
              />
              <IconButton
                aria-label="Plus"
                icon={<FaPlusCircle />}
                variant={"ghost"}
                size={"md"}
              />
              <IconButton
                aria-label="Delete"
                icon={<MdDelete />}
                size={"md"}
                variant={"ghost"}
              />
            </HStack>
          </VStack>
        </HStack>
      </Box>
      <Box
        maxW="300px"
        mt={"30px"}
        p="4"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
      >
        <Box borderBottomWidth="1px" pb="10">
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
      <Box mt="100px" maxW="300px" my={4}>
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
          colorScheme="orange"
          borderRadius={"18px"}
          onClick={handlePaymentProcess}
          outline={"none"}
        >
          PROCESS PAYMENT
        </Button>
      </Center>
    </Box>
  );
}

export default Chart;
