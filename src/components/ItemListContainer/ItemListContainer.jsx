import { Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, where, query, getDocs } from 'firebase/firestore'
import { db } from '../../main'
const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const queryRef = !categoryId ? collection(db, 'productos') : query(collection(db, 'productos'), where('categoria', '==', categoryId))
      const response = await getDocs(queryRef)
      const products = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id
        }
        return newProduct
      })
      setTimeout(() => {
        setData(products)
        setIsLoading(false)
      })
    }
    getData()
  }, [categoryId]);
  return (
    <Flex flexDirection="column" justify={"center"} align={"center"} m={4}>
      <Box mb="10">
        <Heading>{title}</Heading>
      </Box>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="orange.500"
          size="xl"
        />
      ) : (
        <ItemList data={data} />
      )}
    </Flex>
  );
};

export default ItemListContainer;
