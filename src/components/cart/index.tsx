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
  Grid,
  // HStack,
  // VStack,
  // IconButton,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { PiBarcodeLight } from "react-icons/pi";
import ProductInCart from "../product-in-cart";
import { useState, useEffect } from "react";
// import Qris from "../../img/Qris.jpg"


export default function Cart(props: any) {
 const [paymentAmount, setPaymentAmount] = useState(0); 
 const [paymentChange, setPaymentChange] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setPaymentChange(paymentAmount - props.totalPpn);
  }, [paymentAmount, paymentChange]);

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
        <FormLabel>Cashier: Asrar Abuchaer</FormLabel>
        <Input maxW="300px" boxShadow="md" placeholder="Search Category" />
      </Box>
      <Grid gap={"1em"}>
        {props?.cart?.map((el: any, index: any) => {
          return (
            <ProductInCart
              {...el}
              cart={props.cart}
              setCart={props.setCart}
              key={index}
              total={props.total}
              setTotal={props.setTotal}
            />
          );
        })}
      </Grid>
      <Box
        maxW="300px"
        mt={"30px"}
        p="4"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bgColor={"#F5F5F5"}
      >
        <Box>
          <Flex>
            <Text fontWeight={"500"}>Subtotal :</Text>
            <Spacer />
            <Text>{props.total}</Text>
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
            <Text>{props.totalPpn}</Text>
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Detail Pembayaran</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <Text>Uang Yang Dibayar</Text>
              <Input />
              <Text>Total</Text>
              <Input />
              <Text>Kembalian</Text>
              <Input />
              {/* <Text>Tranfer Bank :</Text>
              <Text>1. BCA. 0074-7906-XXX A/n Asrar</Text>
              <Text>2. BRI. 2219-0100-4426-XXX A/n Asrar</Text>
              <Image src={Qris} /> */}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme={"orange"} mr={3} onClick={onClose}>
                Payment Completed
              </Button>
              {/* <Button variant="ghost">Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button
          boxShadow="md"
          fontWeight={"bold"}
          color={"#F5F5F5"}
          _hover={{ bgColor: "#FF7940" }}
          bgColor={"#FF7940"}
          borderRadius={"18px"}
          outline={"none"}
          onClick={onOpen}
        >
          PROCESS PAYMENT
        </Button>
      </Center>
    </Box>
  );
}
