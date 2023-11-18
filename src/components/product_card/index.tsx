import { Box, Image, VStack, HStack, Text, IconButton } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
import img from "../../img/sate.jpg";
import useCounter from "../product-in-cart/useCounter";
import { BsCartPlusFill } from "react-icons/bs";

export const ProductCard = (props: any) => {
  // console.log("ProductCard", props);
  const [count, reset] = useCounter(1);
  console.log("COUNT", count);
  const checkExist = () => {
    let condition;
    try {
      props?.cart?.map((el: any) => {
        if (el?.id === props?.id) {
          alert("PRODUCT SUDAH ADA");
          throw new Error();
        } else {
          condition = true;
          return true;
        }
      });
    } catch (err) {
      throw err;
    }
    return condition;
  };

  return (
    <Box borderRadius="1em" w="128px" h="180px" p="1.5em 1.5em" boxShadow="md">
      <Box overflow="hidden">
        <Image src={img} objectFit="cover" w="100%" h="80px" />
      </Box>
      <VStack align="flex" spacing=".1em">
        <Text fontSize={"10px"} right="20px" as="b">
          {props.productName}
        </Text>
        <Text fontSize={"10px"} color={"#FF7940"} as={"b"}>
          {props.price}
        </Text>
        <VStack>
          <IconButton
            type={"submit"}
            boxShadow="md"
            top=".2em"
            color="black"
            left="50%"
            // transform="translateX(-50%)"
            fontSize="1em"
            size="xs"
            bgColor="transparent"
            _hover={{ bg: "transparent" }}
            icon={<BsCartPlusFill />}
            // icon={<AddIcon />}
            aria-label="ariaLabel"
            onClick={() => {
              const test = {
                id: props.id,
                productName: props.productName,
                price: props.price,
                qty: count,
              };
              const check = checkExist();
              if (check === false) {
              } else {
                props.setCart([test, ...props.cart]);
                props.setTotal(+props.total + +count * +props.price);
                reset();
              }
            }}
          />
          Add to Cart
        </VStack>
      </VStack>
    </Box>
  );
};
