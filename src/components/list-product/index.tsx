import {
  Box,
  HStack,
  Button,
  Image,
  VStack,
  Text,
  Input,
  Img,
  Select,
} from "@chakra-ui/react";
import menu from "../../img/All Menus (1).jpg";
import main from "../../img/Main Course.jpg";
import dessert from "../../img/Dessert.jpg";
import snack from "../../img/Snack.jpg";
import gelato from "../../img/Gelato.jpg";
import coffee from "../../img/Coffee.jpg";
import noncoffee from "../../img/Non-Coffee.jpg";
import fruit from "../../img/Fruit & Salad.jpg";
import { ProductCard } from "../product_card";
import { useEffect, useState } from "react";
import axios from "axios";

export const ListProduct = (props: any) => {
  const [branchId, setBranchId] = useState(1);
  const [product, setProduct] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("product_name");
  const [search, setSearch] = useState("");

  const fetchProduct = async (): Promise<any> => {
    try {
      const res = await axios.get(
       `http://localhost:8000/product?page=${page}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortField=${sortField}&branch_id=${branchId}`
      );
      setProduct(res?.data?.result);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
      fetchProduct();
  }, [page, pageSize, sortOrder, sortField]);

  return (
    <Box mt={"10px"} w={"100%"}>
      <VStack align={"stretch"}>
        <HStack>
          <Box w={"270px"} h={"30px"}>
            <Text>Asrar Abuchaer</Text>
            <Text fontSize={"10px"}>Discover whatever you need easily</Text>
          </Box>
          <Input
            type="text"
            maxW="400px"
            boxShadow="md"
            placeholder="Search Category"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Select
               w={"8em"}
              size={"sm"}
              borderRadius={"0.5em"}
              onChange={(e) => {
                setSortField("product_name");
                setSortOrder(e.target.value);
              }}
          >
            <option value={"asc"}>Name A-Z</option>
            <option value={"desc"}>Name Z-A</option>
          </Select>
          <Select 
              w={"8em"}
              size={"sm"}
              borderRadius={"0.5em"}
              onChange={((e) => {
                setSortField("product_price");
                setSortOrder(e.target.value);
              })}
          >
            <option value={"asc"}>Lowest Price</option>
            <option value={"desc"}>Highest</option>
          </Select>
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
          {product
          .filter((el) => {
            if (search === "") {
              return el;
            } else if (
              el.product_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return el;
            }
          })
          .map((el: any, index: number) => (
            <ProductCard
              key={index}
              {...el}
              cartPC={props.cartPL}
              setCartPC={props.setCartPC}
              total={props.total}
              setTotal={props.setTotal}
            />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

