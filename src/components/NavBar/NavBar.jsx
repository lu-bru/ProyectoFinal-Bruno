import { Flex, Box } from "@chakra-ui/react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavMenuButton from "../NavMenuButton/NavMenuButton";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex p="4" align="center" justify="space-between" boxShadow="md" w="100vw">
      <Box>
        <Link to="/"><Logo /></Link>
      </Box>
      <Flex align="center">
        <NavMenuButton />
        <Link to="/cart"><CartWidget /></Link>
        
      </Flex>
    </Flex>
  );
};

export default NavBar;
