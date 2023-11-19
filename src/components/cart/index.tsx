import {
  Box,
  FormLabel,
  Text,
  Input,
  Spacer,
  Button,
  Flex,
  Center,
  Grid,
  VStack,
  // HStack,
  // VStack,
  // IconButton,
} from "@chakra-ui/react";
import {
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
// import Qris from "../../img/Qris.jpg"

export default function Cart(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentChange, setPaymentChange] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [cash, setCash] = useState(false);
  const [qris, setQris] = useState(false);
  const [change, setChange] = useState(false);
  const [wallet, setWallet] = useState(false);
  // const [userId, setUserId] = useState(1);
  const toast = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentAmount(Number(e.target.value));
  };

  const transactionDetail = async (id: number) => {
    try {
      props?.cart?.map(async (el: any) => {
        const res = await axios.post(
          "http://localhost:8000/transaction-detail/create",
          {
            productId: el.id,
            transactionId: id,
            quantity: el.qty,
            total_price: props.total,
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
    date: Date,
    totalQuantity: number,
    totalPrice: number,
    payment_methodId: number,
    paymentAmount: number,
    paymentChange: number
    // total_price_ppn
  ) => {
    try {
      if (!!props?.totalPpn === false) {
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

      if (paymentChange <= 0) {
        toast({
          title: "Can't Process Transaction",
          description: "Insufficient payment !",
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        throw new Error("Error");
      }

      const res = await axios.post("http://localhost:8000/transaction/create", {
        date,
        totalQuantity,
        totalPrice,
        payment_methodId,
        paymentAmount,
        paymentChange,
        // total_price_ppn,
      });
      console.log("lll", res);

      await transactionDetail(res?.data?.data?.id);
      toast({
        title: "Transaction Done!",
        description: "Thank You So Much!",
        status: "success",
        duration: 4000,
        position: "top-right",
      });
      onClose();
    } catch (err) {
      throw err;
    }
  };

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
      </Box>
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
            {/* <VStack> */}
            <Box
              onClick={() => {
                setCash(false);
                setQris(false);
                setChange(false);
                setWallet(!wallet);
                setPaymentMethod(3);
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
                <Box color={"black"} fontSize={"4em"}>
                  <LuWallet />
                </Box>
                <Box color={"yellow"}>
                  <Text as={"b"} textColor={"black"} fontSize={"xl"}>
                    Debit
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box
              onClick={() => {
                setPaymentMethod(2);
                setPaymentAmount(0);
                setWallet(false);
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
                <Box color={"black"} fontSize={"4em"}>
                  <MdOutlineQrCode2 />
                </Box>
                <Box color={"yellow"}>
                  <Text as={"b"} textColor={"black"} fontSize={"xl"}>
                    Qris
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box
              w={"15em"}
              h={"8em"}
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
                setPaymentMethod(1);
                setWallet(false);
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
                <Box color={"black"} fontSize={"4em"}>
                  <LiaMoneyBillWaveSolid />
                </Box>
                <Box color={cash ? "#F99B2A" : "#6D6D6D"}>
                  <Text as={"b"} textColor={"black"} fontSize={"xl"}>
                    Cash
                  </Text>
                </Box>
                <Input
                  boxShadow={"md"}
                  // display={change ? "block" : "none"}
                  type={"number"}
                  placeholder={"Enter Payment Amount"}
                  w={"14em"}
                  focusBorderColor={"black"}
                  value={paymentAmount}
                  onChange={handleChange}
                  textAlign={"center"}
                />
              </VStack>
            </Box>
            {/* </VStack> */}
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={"#FF7940"}
              _hover={{ bgColor: "#FF7940" }}
              mr={3}
              onClick={async () => {
                await transaction(
                  date,
                  props?.total,
                  props?.totalQty,
                  paymentMethod,
                  paymentAmount,
                  paymentChange
                  // props?.totalPpn
                );
                await props.setCart([]);
                props?.setPpn(0);
                props?.setTotal(0);
                props?.setTotalPpn(0);
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
