import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Revelance
      </MenuButton>
      <MenuList>
        <MenuItem>Name</MenuItem>
        <MenuItem>Cost</MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>  
      </MenuList>
    </Menu>
  );
};

export default SortSelector;