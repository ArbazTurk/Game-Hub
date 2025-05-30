import { HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () =>
  // {onSearch}: Props
  {
    return (
      <HStack
        padding={"10px"}
      >
        <Link to="/">
          <Image
            src={logo}
            boxSize={{ base: "50px", md: "60px" }}
            objectFit={"cover"}
          />
        </Link>
        <SearchInput
        // onSearch={onSearch}
        />
        <ColorModeSwitch />
      </HStack>
    );
  };

export default NavBar;
