import { Box, Image, VStack, HStack, Text, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import img from "../../img/sate.jpg";
import useCounter from "../product-in-cart/useCounter";

export const ProductCard = (props: any) => {
  const [count] = useCounter(1);

  return (
    <Box borderRadius="1em" w="240px" h="320px" p="2.5em 1.5em" boxShadow="md">
      <Box overflow="hidden">
        <Image objectFit="cover" w="100%" h="180px" src={img} />
      </Box>
      <VStack fontSize="sm" align="flex" spacing="0">
        {/* <Text fontSize={"20px"} right="20px" as="b">
          Sate Ratu
        </Text> */}
        <Text>name product {props.product_name}</Text>
        <HStack>
          {/* <Text fontSize={"20px"} color={"#FF7940"} as={"b"}></Text> */}
          <Text>price {props.product_price}</Text>
          <IconButton
            type={"submit"}
            boxShadow="md"
            top=".5em"
            color="black"
            left="50%"
            transform="translateX(-50%)"
            fontSize="1.5em"
            size="xs"
            bgColor="transparent"
            _hover={{ bg: "transparent" }}
            icon={<AddIcon />}
            aria-label="ariaLabel"
            onClick={async () => {
              const test = {
                id: props.id,
                product_name: props.product_name,
                product_price: props.product_price,
                qty: count,
              };
              await props.handleplus(Number(props.id), {
                ...test,
              });
              props.setTotal(props.total + count * props.product_price);
            }}
          />
        </HStack>
      </VStack>
    </Box>
  );
};
