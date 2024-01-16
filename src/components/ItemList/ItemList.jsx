import React from "react";
import Item from "../Item/Item";
import { Flex } from "@chakra-ui/react";

const ItemList = ({ data }) => {
  return (
    <Flex justify="center" wrap="wrap">
      {data.map((productos) => (
        <div key={productos.id}>
          <Item {...productos} />
        </div>
      ))}
    </Flex>
  );
};

export default ItemList;
