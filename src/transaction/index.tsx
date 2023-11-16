import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Chart from "../components/chart";
import ListProduct from "../components/list-product";
import Sidebar from "../components/sidebar-transaction";

function Transaction() {
  return (
    <HStack align={"stretch"} w={"100vw"} h={"100vh"}>
      <Sidebar/>
      <ListProduct />
      <Chart />
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

export default Transaction;
