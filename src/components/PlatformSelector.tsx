import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import Platform from "../entities/Platform";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

const PlatformSelector = () =>
  // { onSelectPlatform, selectedPlatformId }: Props
  {
    const { data, error } = usePlatforms();

    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const selectedPlatform = usePlatform(platformId);

    const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

    // if (error) return null;

    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results.map((platform) => (
            <MenuItem
              // onClick={() => onSelectPlatform(platform)}
              onClick={() => setPlatformId(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  };

export default PlatformSelector;
