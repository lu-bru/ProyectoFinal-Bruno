import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext"
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";

const ItemDetail = ({ img, nombre, descripcion, stock, precio, id }) => {
  const [quantity, setQuantity] = useState(0);
  const {addItem} = useContext(CartContext)
  const onAdd = (quantity) => {
    setQuantity(quantity);
    const newProduct = {
      id, nombre, precio, stock
    }
    addItem(newProduct, quantity)
  };
  return (
    <Card maxW={{ base: "xs", md: "sm", lg: "md" }} m="2">
      <CardBody>
        <Image src={img} alt={nombre}></Image>
        <Stack>
          <Heading>{nombre}</Heading>
          <Text>{descripcion}</Text>
          <Text color="orange.400" fontSize="xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        {quantity > 0 ? (
          <Button variant="outline">
            <Link to={"/cart"}>Ir a mi carrito</Link>
          </Button>
        ) : (
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
        )}
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;
