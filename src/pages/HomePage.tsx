import { Grid, GridItem, Show, Box, HStack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import NavBar from '../components/NavBar'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            // onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id})}
            // selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box  paddingLeft={2}>
          <GameHeading 
          // gameQuery={gameQuery}
           />
          <HStack spacing={5} marginBottom={4}>
            <PlatformSelector
              // selectedPlatformId={gameQuery.platformId}
              // onSelectPlatform={(platform) =>
              //   setGameQuery({ ...gameQuery, platformId: platform.id})
              // }
            />
            <SortSelector
              // sortOrder={gameQuery.sortOrder}
              // onSelectSortOrder={(sortOrder) =>
              //   setGameQuery({ ...gameQuery, sortOrder })
              // }
            />
          </HStack>
        </Box>
        <GameGrid 
        // gameQuery={gameQuery}
         />
      </GridItem>
    </Grid>
  )
}

export default HomePage