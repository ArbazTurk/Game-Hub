import useTrailers from "../hooks/useTrailers";

interface Props {
  gameSlug: string;
}

const GameTrailer = ({ gameSlug }: Props) => {
  const { data, error, isLoading } = useTrailers(gameSlug);
  console.log('data',data);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
