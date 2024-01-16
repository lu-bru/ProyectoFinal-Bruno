import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ nombre, img, precio, id }) => {
  return (
    <Card maxW="xs" m="2">
      <CardBody>
        <img src={img} alt={nombre} />
        <Heading size="md">{nombre}</Heading>
        <Text color="orange.400" fontSize="xl">
          ${precio}
        </Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="green" variant="outline">
          <Link to={`/product/${id}`}>Ver detalle</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Item;
