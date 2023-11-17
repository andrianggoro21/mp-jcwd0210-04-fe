import { Box, Image, VStack, HStack, Text, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import img from "../../img/sate.jpg";

export const ProductCard = (props: any) => {
  return (
    <Box
      // border={"1px"}
      borderRadius="1em"
      w="240px"
      h="320px"
      p="2.5em 1.5em"
      boxShadow="md"
    >
      <Box overflow="hidden">
        <Image
          // borderRadius={"0.5em"}
          // border="solid 0.2em grey"
          objectFit="cover"
          w="100%"
          h="180px"
          src={img}
        />
      </Box>
      <VStack fontSize="sm" align="flex" spacing="0">
        <Text fontSize={"20px"} right="20px" as="b">
          Sate Ratu
        </Text>
        <Text>{props.product_name}</Text>
        <HStack>
          <Text fontSize={"20px"} color={"#FF7940"} as={"b"}>
            {props.product_price}
          </Text>
          <IconButton
            type={"submit"}
            boxShadow="md"
            top=".5em"
            color="black"
            left="80px"
            fontSize="1.5em"
            size="xs"
            bgColor="transparent"
            _hover={{ bg: "transparent" }}
            icon={<AddIcon />}
            aria-label="ariaLabel"
            onClick={() => {
              const test = {
                id: props.id,
                product_name: props.product_name,
                product_price: props.product_price,
              };
              props.setCartPC([test, ...props.cartPC]);
              console.log("props", props.cartPC);
            }}
          />
        </HStack>
      </VStack>
    </Box>
  );
};
