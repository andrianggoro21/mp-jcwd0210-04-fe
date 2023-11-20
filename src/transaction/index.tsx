import { HStack } from "@chakra-ui/react";
import Chart from "../components/cart";
import Sidebar from "../components/sidebar-transaction";
import { ListProduct } from "../components/list-product";
import { useState, useEffect } from "react";

export default function Transaction() {
  const [cart, setCart] = useState([] as any);
  const [total, setTotal] = useState(0);
   const [totalQty, setTotalQty] = useState(0);

  // const [day, setDay] = useState("");

  // const handlesPlus = async (id: number, params: any) => {
  //   const exist = await cart.map((el: any) => {
  //     if (el.id === Number(id)) {
  //       return {
  //         ...el,
  //         qty: el.qty + el.qty,
  //       };
  //     }
  //   });
  //   if (exist.length > 0) {
  //     alert("Product Sudah Ada");
  //   } else {
  //     setCart([params, ...cart]);
  //   }
  // };

  return (
    <HStack align={"stretch"} w={"100vw"} h={"100vh"}>
      <Sidebar />
      <ListProduct
        cart={cart}
        setCart={setCart}
        total={total}
        setTotal={setTotal}
        totalQty={totalQty}
        setTotalQty={setTotalQty}
      />
      <Chart
        cart={cart}
        setCart={setCart}
        total={total}
        setTotal={setTotal}
        totalQty={totalQty}
        setTotalQty={setTotalQty}
      />
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
