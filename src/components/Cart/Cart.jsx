import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Heading,
  Flex,
  IconButton,
} from "@chakra-ui/react";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart, decrementItem, incrementItem } = useContext(CartContext);
  if (cart.length === 0) {
    return <Heading align="center" mt="4">El carrito se encuentra vacío</Heading>;
  } else {
    return (
      <Flex m="5" direction="column">
        <TableContainer mt="10" maxW="100vw">
          <Table colorScheme="orange">
            <Thead>
              <Tr>
                <Th w="22.5%" p="5px">Producto</Th>
                <Th w="22.5%" p="5px">Cantidad</Th>
                <Th w="22.5%" p="5px">Precio unitario</Th>
                <Th w="22.5%" p="5px">Subtotal</Th>
                <Th w="10%" p="5px"></Th>
              </Tr>
            </Thead>
            {cart.map((prod) => (
              <Tbody key={prod.id}>
                <Tr>
                  <Td p="5px">{prod.nombre}</Td>
                  <Td p="5px">
                  <Button mr="2" onClick={() => decrementItem(prod.id)}>-</Button>
                  {prod.quantity}
                  <Button ml="2" onClick={() => incrementItem(prod.id, prod.stock)}>+</Button></Td>
                  <Td p="5px">${prod.precio}</Td>
                  <Td p="5px">${prod.precio * prod.quantity}</Td>
                  <Td p="5px">
                  <IconButton onClick={() => removeItem(prod.id)}aria-label='Eliminar' icon={<DeleteIcon />} />
                  </Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </TableContainer>
        <Flex justify={"end"} mt={5}>
          <Heading as='h4' size='lg'>Total: ${getTotal()}</Heading>
          </Flex>
          <Flex justify={"end"} mt={5}>
          <Box>
            <Button mr={5} variant="outline" onClick={() => clearCart()}>Vaciar carrito</Button>
          </Box>
          <Button colorScheme="green" variant="outline">
            <Link to={"/checkout"}>Finalizar la compra</Link>
          </Button>
          </Flex>
      </Flex>
    );
  }
};

export default Cart;
