import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavMenuButton = () => {
  return (
    <Menu>
      <MenuButton as={Button} variant="outline" rightIcon={<ChevronDownIcon />}>
        Categorías
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link to={"/category/acidas"}>Ácidas</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/category/dulces"}>Dulces</Link>
        </MenuItem>
        <MenuItem>
          <Link to={"/category/neutras"}>Neutras</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenuButton;
