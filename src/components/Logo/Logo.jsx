import { Box } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <Box w="150px">
      <img src={logo} alt="Logo" />
    </Box>
  );
};

export default Logo;
