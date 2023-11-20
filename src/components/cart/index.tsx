import {
  Box,
  FormLabel,
  Text,
  Input,
  Spacer,
  Button,
  Flex,
  Divider,
  Center,
  Grid,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { MdOutlineQrCode2 } from "react-icons/md";
import ProductInCart from "../product-in-cart";
import { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
// import { useRouteId } from "react-router/dist/lib/hooks";
// import Qris from "../../img/Qris.jpg"

export default function Cart(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentChange, setPaymentChange] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [cash, setCash] = useState(false);
  const [qris, setQris] = useState(false);
  const [change, setChange] = useState(false);
  const [debit, setDebit] = useState(false);
  const [userId, setUserId] = useState(2);
  const toast = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentAmount(Number(e.target.value));
  };

  const transaction_details = async (id: number) => {
    try {
      props?.cart?.map(async (el: any) => {
        const res = await axios.post(
          "http://localhost:8080/transaction_details",
          {
            productId: el.id,
            transactionId: id,
            quantity: el.qty,
            price: props.total,
            cart_id: 1,
          }
        );

        return res;
      });
    } catch (err) {
      throw err;
    }
  };

  const transaction = async (
    userId: number,
    totalQuantity: number,
    totalPrice: number,
    payment_methodId: number,
    paymentAmount: number,
    paymentChange: number
  ) => {
    // console.log(transaction);

    console.log("totalQty", totalQuantity);
    console.log("totalPrice", totalPrice);
    console.log("payment_methodId", payment_methodId);
    console.log("paymentAmount", paymentAmount);
    console.log("paymentChange"), paymentChange;

    try {
      if (!!props?.total === false) {
        toast({
          title: "Can't Process Transaction",
          description: "Cart Empty!",
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        throw new Error("Error");
      }
      if (!!paymentMethod === false) {
        toast({
          title: "Can't Process Transaction",
          description: "Choose Payment Method!",
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        throw new Error("Error");
      }
      if (paymentMethod === 1 && !!paymentAmount === false) {
        toast({
          title: "Can't Process Transaction",
          description: "Input Payment Amount!",
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        throw new Error("Error");
      }

      // if (paymentChange <= 0) {
      //   toast({
      //     title: "Can't Process Transaction",
      //     description: "Insufficient payment !",
      //     status: "warning",
      //     duration: 2000,
      //     position: "top-right",
      //   });
      //   throw new Error("Error");
      // }

      const res = await axios.post("http://localhost:8080/transactions", {
        userId,
        totalQuantity,
        totalPrice,
        payment_methodId,
        paymentAmount,
        paymentChange,
      });
      console.log("dataTrans", res?.data?.data);

      await transaction_details(res?.data?.data?.id);
      toast({
        title: "Transaction Done!",
        description: "Thank You So Much!",
        status: "success",
        duration: 4000,
        position: "top-right",
      });
      onClose();
    } catch (err: any) {
      alert(err?.response?.data);
    }
  };

  useEffect(() => {
    setPaymentChange(paymentAmount - props.total);
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
              totalQty={props.totalQty}
              setTotalQty={props.setTotalQty}
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
        <Box mt="2" borderTopWidth="1px" pt="2" fontWeight="bold">
          <Flex>
            <Text color={"#FF7940"}>Total Price :</Text>
            <Spacer />
            <Text>{props.total}</Text>
          </Flex>
        </Box>
        <Flex>
          <Text> Total Quantity</Text>
          <Spacer />
          <Text> {props.totalQty} </Text>
        </Flex>
      </Box>
      {/* <Box mt="100px" maxW="300px" my={4}>
        <FormLabel>Select Payment</FormLabel>
      </Box> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <Text fontSize={"20px"} mt={"5px"} as={"b"}>
              Detail Pembayaran
            </Text>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Box>
                <Box
                  w={"8em"}
                  h={"4em"}
                  display={"flex"}
                  flexDir={"row"}
                  _focusVisible={{ color: "red" }}
                  borderRadius={"0.5em"}
                  bgColor={"#EEF1F2"}
                  border={cash ? "solid #F99B2A" : "solid #6D6D6D"}
                  boxShadow={"lg"}
                  transition={"transform .3s"}
                  _hover={{ bgColor: "orange.100", transform: "scale(1.05)" }}
                  onClick={() => {
                    setCash(false);
                    setQris(false);
                    setChange(false);
                    setDebit(!debit);
                    setPaymentMethod(1);
                  }}
                >
                  <VStack
                    spacing={"0"}
                    w={"100%"}
                    border={"1px"}
                    borderRadius={".5em"}
                    p={".5em"}
                    cursor={"pointer"}
                  >
                    <Box color={"black"} fontSize={"2em"}>
                      <LuWallet />
                    </Box>
                    <Box color={"yellow"}>
                      <Text as={"b"} textColor={"black"} fontSize={"10px"}>
                        Debit
                      </Text>
                    </Box>
                  </VStack>
                </Box>
                <Box
                  mt={"5px"}
                  w={"8em"}
                  h={"4em"}
                  display={"flex"}
                  flexDir={"row"}
                  _focusVisible={{ color: "red" }}
                  borderRadius={"0.5em"}
                  bgColor={"#EEF1F2"}
                  border={cash ? "solid #F99B2A" : "solid #6D6D6D"}
                  boxShadow={"lg"}
                  transition={"transform .3s"}
                  _hover={{ bgColor: "orange.100", transform: "scale(1.05)" }}
                  onClick={() => {
                    setPaymentMethod(2);
                    setPaymentAmount(0);
                    setDebit(false);
                    setCash(false);
                    setChange(false);
                    setQris(!qris);
                  }}
                >
                  <VStack
                    spacing={"0"}
                    w={"100%"}
                    border={"1px"}
                    borderRadius={".5em"}
                    p={".5em"}
                    cursor={"pointer"}
                  >
                    <Box color={"black"} fontSize={"2em"}>
                      <MdOutlineQrCode2 />
                    </Box>
                    <Box color={"yellow"}>
                      <Text as={"b"} textColor={"black"} fontSize={"10px"}>
                        Qris
                      </Text>
                    </Box>
                  </VStack>
                </Box>
                <Box
                  mt={"5px"}
                  w={"8em"}
                  h={"4em"}
                  display={"flex"}
                  flexDir={"row"}
                  _focusVisible={{ color: "red" }}
                  borderRadius={"0.5em"}
                  bgColor={"#EEF1F2"}
                  border={cash ? "solid #F99B2A" : "solid #6D6D6D"}
                  boxShadow={"lg"}
                  transition={"transform .3s"}
                  _hover={{ bgColor: "orange.100", transform: "scale(1.05)" }}
                  onClick={() => {
                    setPaymentMethod(3);
                    setDebit(false);
                    setQris(false);
                    setCash(!cash);
                    setChange(!change);
                    setPaymentAmount(0);
                  }}
                >
                  <VStack
                    spacing={"0"}
                    w={"100%"}
                    border={"1px"}
                    borderRadius={".5em"}
                    p={".5em"}
                    cursor={"pointer"}
                  >
                    <Box color={"black"} fontSize={"2em"}>
                      <LiaMoneyBillWaveSolid />
                    </Box>
                    <Box color={cash ? "#F99B2A" : "#6D6D6D"}>
                      <Text as={"b"} textColor={"black"} fontSize={"10px"}>
                        Cash
                      </Text>
                    </Box>
                    <Input
                      mt={"5px"}
                      w={"8em"}
                      h={"4em"}
                      boxShadow={"md"}
                      type={"number"}
                      placeholder={"Enter Payment Amount"}
                      focusBorderColor={"black"}
                      value={paymentAmount}
                      onChange={handleChange}
                      textAlign={"center"}
                    />
                  </VStack>
                </Box>
              </Box>
            </Center>
          </ModalBody>
          <Divider />
          <Box p={"1em"}>
            <Text textAlign={"left"}>Payment Change : {paymentChange} </Text>
          </Box>
          <ModalFooter mt={"30px"}>
            <Button
              bgColor={"#FF7940"}
              _hover={{ bgColor: "#FF7940" }}
              mr={120}
              onClick={async () => {
                console.log(transaction);
                await transaction(
                  userId,
                  props?.totalQty,
                  props?.total,
                  paymentMethod,
                  paymentAmount,
                  paymentChange
                );
                await props.setCart([]);
                props?.setTotal(0);
                setPaymentMethod(0);
                setPaymentChange(0);
                setPaymentAmount(0);
                props?.setTotalQty(0);
                onClose();
              }}
            >
              Procces Payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Center>
        <Button
          mt={"20px"}
          boxShadow="md"
          fontWeight={"bold"}
          color={"#F5F5F5"}
          _hover={{ bgColor: "#FF7940" }}
          bgColor={"#FF7940"}
          borderRadius={"18px"}
          onClick={onOpen}
          variant="solid"
        >
          CHOOSE PAYMENT
        </Button>
      </Center>
    </Box>
  );
}
