import { Flex, Badge, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  return (
    <Box>
      <Flex display="flex" align="center" justify={"space-around"} ml="4">
        <FaShoppingCart size={20} color="black" />
        {getQuantity() !== 0 && (
          <Badge ml="1" colorScheme="orange" variant="subtle">
            {getQuantity()}
          </Badge>
        )}
      </Flex>
    </Box>
  );
};

export default CartWidget;
