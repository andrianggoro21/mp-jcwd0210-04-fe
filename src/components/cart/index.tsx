import {
  Box,
  FormLabel,
  Text,
  Input,
  Spacer,
  // Image,
  Button,
  Flex,
  Center,
  Grid,
  // HStack,
  // VStack,
  // IconButton,
} from "@chakra-ui/react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { PiBarcodeLight } from "react-icons/pi";
import ProductInCart from "../product-in-cart";
// import img from "../../img/sate.jpg";
// import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import useCounter from "./useCounter";

export default function Chart(props: any) {
  // const [count, increment, decrement] = useCounter(props.qty);

  // const plus = () => {
  //   increment();
  //   props.setTotal(props.total + props.product_price);
  // };

  // const minus = () => {
  //   decrement();
  //   props.setTotal(props.total - props.product_price);
  // };

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
        <Input maxW="300px" boxShadow="md" placeholder="Search Category" />
      </Box>
      <Grid gap={"1em"}>
        {props?.cart?.map((el: any, index: any) => {
          return (
            <ProductInCart
            {...el}
            key={index}
            total={props.total}
            setTotal={props.setTotal}
            />
          );
        })}
      </Grid>
      {/* <Box mt={"30px"} border="md">
        <HStack bgColor={"red"} align={"stretch"}>
          <Box>
            <Image src={img} boxSize={"10em"} h={"75px"} />
          </Box>
          <VStack align={"stretch"} spacing={"0em"}>
            <Text textColor={"black"}>{props.product_name}</Text>
            <Text color="#FF7940">{`${count} X Rp. ${props.product_price}`}</Text>
          </VStack>
          <VStack>
            <HStack spacing={"0"}>
              <IconButton
                aria-label="Minus"
                icon={<FaMinusCircle />}
                variant={"ghost"}
                size={"md"}
                onClick={minus}
              />
              <IconButton
                aria-label="Plus"
                icon={<FaPlusCircle />}
                variant={"ghost"}
                size={"md"}
                onClick={plus}
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
      </Box> */}
      <Box
        maxW="300px"
        mt={"30px"}
        p="4"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bgColor={"#F5F5F5"}
      >
        <Box borderBottomWidth="1px" pb="10">
          <Flex>
            <Text fontWeight={"500"}>Subtotal :</Text>
            <Spacer />
            <Text>{props.total}</Text>
          </Flex>
          <Flex>
            <Text fontWeight={"500"}>Diskon :</Text>
            <Spacer />
            <Text>{props.diskon}</Text>
          </Flex>
          <Flex>
            <Text fontWeight={"500"}> Pajak 11% :</Text>
            <Spacer />
            <Text>{props.ppn}</Text>
          </Flex>
        </Box>
        <Box mt="2" borderTopWidth="1px" pt="2" fontWeight="bold">
          <Flex>
            <Text color={"#FF7940"}>Total :</Text>
            <Spacer />
            <Text>{props.totalPpn} hallo</Text>
          </Flex>
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
          >
            Cash
          </Button>
          <Spacer />
          <Button
            boxShadow="md"
            leftIcon={<LuWallet />}
            variant="outline"
            mr={2}
          >
            Debit
          </Button>
          <Spacer />
          <Button
            boxShadow="md"
            leftIcon={<PiBarcodeLight />}
            variant="outline"
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
          outline={"none"}
        >
          PROCESS PAYMENT
        </Button>
      </Center>
    </Box>
  );
}
