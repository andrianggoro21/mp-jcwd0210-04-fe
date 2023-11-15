import {
  Box,
  HStack,
  Button,
  IconButton,
  Image,
  VStack,
  Text,
  Input,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import img from "../../img/sate.jpg";
import teh from "../../img/es-teh.jpeg";

function ListProduct() {
  return (
    <Box h={"100%"} bgColor={""}>
      <HStack spacing="24px">
        <Box>
          <Box w={"100%"} h={"50px"}>
            <Input></Input>
          </Box>
          <Box display={"flex"} w={"100%"} h={"80px"}>
            <Button boxShadow="md" variant="outline" mr={2} color={"#FF7940"}>
              All Menu
            </Button>
            <Button boxShadow="md" variant="outline" mr={2} color={"#FF7940"}>
              Main Course
            </Button>
            <Button boxShadow="md" variant="outline" mr={2} color={"#FF7940"}>
              Snack
            </Button>
            <Button boxShadow="md" variant="outline" mr={2} color={"#FF7940"}>
              Coffee
            </Button>
            <Button boxShadow="md" variant="outline" mr={2} color={"#FF7940"}>
              Non-Coffee
            </Button>
          </Box>
          <Box
            border={"1px"}
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
              <Text>Sate Ratu Enak</Text>
              <HStack>
                <Text fontSize={"20px"} color={"#FF7940"} as={"b"}>
                  Rp.10.000
                </Text>
                <IconButton
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
                />
              </HStack>
            </VStack>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

export default ListProduct;
