import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Flex, Spinner } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../main";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getProduct = async () => {
      const queryRef = doc(db, "productos", itemId);
      const response = await getDoc(queryRef);
      const newProduct = {
        ...response.data(),
        id: response.id,
      };
      setTimeout(() => {
        setProduct(newProduct);
        setIsLoading(false);
      });
    };
    getProduct();
  }, [itemId]);

  return (
    <div>
      <Flex flexDirection="column" justify={"center"} align={"center"} m={4}>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="orange.500"
            size="xl"
          />
        ) : (
          <ItemDetail {...product} />
        )}
      </Flex>
    </div>
  );
};

export default ItemDetailContainer;
