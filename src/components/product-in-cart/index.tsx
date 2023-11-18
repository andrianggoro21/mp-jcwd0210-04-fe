import { Box, IconButton, VStack, HStack, Image, Text } from "@chakra-ui/react";
import img from "../../img/sate.jpg";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import useCounter from "./useCounter";

export default function ProductInCart(props: any) {
  const [count, increment, decrement] = useCounter(props.qty);
  const [totalPPrice, setTotalPPrice] = useState(props.price * props.qty);
  useEffect(() => {
    setTotalPPrice(props.qty * props.price);
  }, [totalPPrice, setTotalPPrice, props.qty]);
  console.log("PIC", props);
  const plus = (id: number) => {
    props?.setCart(
      props?.cart.map((el: any) => {
        if (el?.id === id) {
          console.log(el.id === id);
          return {
            ...el,
            qty: el.qty + 1,
          };
        } else {
          return el;
        }
      })
    );
    setTotalPPrice(props.qty * props.price);
    increment();
    props?.setTotal(+props.total + +props.price);
  };

  const minus = () => {
    decrement();
    props.setTotal(+props.total - +props.price);
  };

  const handleDelete = (id: number) => {
    props?.setCart(props?.cart.filter((el: any) => el.id !== id));
  };

  return (
    <Box mt={"30px"} border="md">
      <HStack align={"stretch"}>
        <Box>
          <Image src={img} boxSize={"5em"} h={"40px"} />
        </Box>
        <VStack align={"stretch"} spacing={"0em"}>
          <Text fontSize={"10px"} textColor={"black"}>
            {props.productName}
          </Text>
          <Text
            fontSize={"10px"}
            color="#FF7940"
          >{`${props.qty} X Rp ${props.price}`}</Text>
          <Text>Sum : Rp {totalPPrice}</Text>
        </VStack>
        <VStack>
          <HStack spacing={"0"}>
            <IconButton
              aria-label="Minus"
              icon={<FaMinusCircle />}
              variant={"ghost"}
              size={"md"}
              onClick={() => {
                count > 1 ? minus() : null;
              }}
            />
            <IconButton
              aria-label="Plus"
              icon={<FaPlusCircle />}
              variant={"ghost"}
              size={"md"}
              onClick={() => {
                count !== 100 ? plus(props?.id) : null;
              }}
            />
            <IconButton
              aria-label="Delete"
              icon={<MdDelete />}
              size={"md"}
              variant={"ghost"}
              onClick={() => {
                handleDelete(props?.id);
                setTotalPPrice(0);
                props.setTotal(0);
              }}
            />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
