import {
  Box,
  HStack,
  Button,
  IconButton,
  Image,
  VStack,
  Text,
  Input,
  Img,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import img from "../../img/sate.jpg";
import menu from "../../img/All Menus (1).jpg";
import main from "../../img/Main Course.jpg";
import dessert from "../../img/Dessert.jpg";
import snack from "../../img/Snack.jpg";
import gelato from "../../img/Gelato.jpg";
import coffee from "../../img/Coffee.jpg";
import noncoffee from "../../img/Non-Coffee.jpg";
import fruit from "../../img/Fruit & Salad.jpg";

function ListProduct() {
  return (
    <Box mt={"10px"} w={"100%"}>
      <VStack align={"stretch"}>
        <HStack>
          <Box w={"270px"} h={"30px"}>
            <Text>Asrar Abuchaer</Text>
            <Text fontSize={"10px"}>Discover whatever you need easily</Text>
          </Box>
          <Input
            maxW="400px"
            boxShadow="md"
            placeholder="Search Category"
          ></Input>
        </HStack>
        <HStack mt={"5px"} w={"43em"}>
          <Button
            w={"80px"}
            h={"60px"}
            bgColor={"#FFFFFF"}
            boxShadow="md"
            variant="outline"
            mr={2}
            color={"#FF7940"}
          >
            <Box
              w="100%"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={menu} boxSize="40px" />
              <Text fontSize={"12px"} color={"#B4B4B4"}>
                All Menu
              </Text>
            </Box>
          </Button>
          <Button
            w={"80px"}
            h={"60px"}
            bgColor={"#FFFFFF"}
            boxShadow="md"
            variant="outline"
            mr={2}
          >
            <Box
              w="100%"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Img src={main} boxSize="40px" />
              <Text fontSize={"12px"} color="#FF7940">
                Main Course
              </Text>
            </Box>
          </Button>
          <Button
            w={"80px"}
            h={"60px"}
            bgColor={"#FFFFFF"}
            boxShadow="md"
            variant="outline"
            mr={2}
            color={"#FF7940"}
          >
            <Box
              w="100%"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Img src={dessert} boxSize="40px" />
              <Text fontSize={"12px"} color="#FF7940">
                {" "}
                Snack
              </Text>
            </Box>
          </Button>
          <Button
            w={"80px"}
            h={"60px"}
            bgColor={"#FFFFFF"}
            boxShadow="md"
            variant="outline"
            mr={2}
            color={"#FF7940"}
          >
            <Box
              w="100%"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Img src={snack} boxSize="40px" />
              <Text fontSize={"12px"} color="#FF7940">
                Snack
              </Text>
            </Box>
          </Button>
          <Button
            w={"80px"}
            h={"60px"}
            bgColor={"#FFFFFF"}
            boxShadow="md"
            variant="outline"
            mr={2}
            color={"#FF7940"}
          >
            <Box
              w="100%"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Img src={gelato} boxSize="40px" />
              <Text fontSize={"12px"} color="#FF7940">
                Gelato
              </Text>
            </Box>
          </Button>
          <Button
            w={"80px"}
            h={"60px"}
            bgColor={"#FFFFFF"}
            boxShadow="md"
            variant="outline"
            mr={2}
            color={"#FF7940"}
          >
            <Box
              w="100%"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Img src={coffee} boxSize="40px" />
              <Text fontSize={"12px"} color="#FF7940">
                Coffee
              </Text>
            </Box>
          </Button>
          <Button
            w={"80px"}
            h={"60px"}
            bgColor={"#FFFFFF"}
            boxShadow="md"
            variant="outline"
            mr={2}
            color={"#FF7940"}
          >
            <Box
              w="100%"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Img src={noncoffee} boxSize="40px" />
              <Text fontSize={"12px"} color="#FF7940">
                Non-Coffee
              </Text>
            </Box>
          </Button>
          <Button
            w={"80px"}
            h={"60px"}
            bgColor={"#FFFFFF"}
            boxShadow="md"
            variant="outline"
            mr={2}
            color={"#FF7940"}
          >
            <Box
              w="100%"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Img src={fruit} boxSize="40px" />
              <Text fontSize={"12px"} color="#FF7940">
                Fruit & Salad
              </Text>
            </Box>
          </Button>
        </HStack>
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
      </VStack>
    </Box>
  );
}

export default ListProduct;
