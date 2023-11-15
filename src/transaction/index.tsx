import { Grid, GridItem } from "@chakra-ui/react";
import Chart from "../components/chart";
import ListProduct from "../components/list-product";

function Transaction() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem>
        <ListProduct />
      </GridItem>
      <GridItem>
        <Chart />
      </GridItem>
    </Grid>
  );
}

export default Transaction;
