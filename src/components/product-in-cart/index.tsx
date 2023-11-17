import { Box, IconButton, VStack, HStack, Image, Text } from "@chakra-ui/react";
import img from "../../img/sate.jpg";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useCounter from "./useCounter";

export default function ProductInCart(props: any) {
  const [count, increment, decrement] = useCounter(props.qty);
  const plus = () => {
    increment();
    props.setTotal(props.total + props.product_price);
  };

  const minus = () => {
    decrement();
    props.setTotal(props.total - props.product_price);
  };

  return (
    <Box mt={"30px"} border="md">
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
              onClick={() => {
                count > 0 ? minus() : null;
              }}
            />
            <IconButton
              aria-label="Plus"
              icon={<FaPlusCircle />}
              variant={"ghost"}
              size={"md"}
              onClick={() => {
                count !== 100 ? plus() : null;
              }}
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
  );
}
