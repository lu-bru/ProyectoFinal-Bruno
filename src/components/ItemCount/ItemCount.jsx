import React from "react";
import useCounter from "../../hooks/useCounter";
import { Heading, Flex, Button } from "@chakra-ui/react";

const ItemCount = ({ initialValue, stock, onAdd }) => {
  const { count, increment, decrement } = useCounter(initialValue, stock);
  return (
    <Flex alignItems="center" justifyContent="center" w="100%">
      <Button mr={5} colorScheme="green" onClick={decrement}>
        -
      </Button>
      <Heading size="md">{count}</Heading>
      <Button ml={5} mr={5} colorScheme="green" onClick={increment}>
        +
      </Button>
      <Button variant="outline" onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;
