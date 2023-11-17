import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Chart from "../components/cart";
import Sidebar from "../components/sidebar-transaction";
import { ListProduct } from "../components/list-product";
import { useState, useEffect } from "react";

export default function Transaction() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <HStack align={"stretch"} w={"100vw"} h={"100vh"}>
      <Sidebar />
      < ListProduct
        cart={cart}
        setCart={setCart}
        total={total}
        setTotal={setTotal}
      />
      <Chart cartPC={cart} total={total} setTotal={setTotal} />
    </HStack>
    // <Grid templateColumns={"repeat(3, 1fr)"}>
    //   <GridItem w="100%" h="100%">
    //     <Sidebar />
    //   </GridItem>
    //   <GridItem  w="100%" h="100%">
    //     <ListProduct />
    //   </GridItem>
    //   <GridItem w="100%" h="100%">
    //     <Chart />
    //   </GridItem>
    // </Grid>
  );
}
