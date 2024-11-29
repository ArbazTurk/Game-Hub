import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";

const useTrailers = (gameSlug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameSlug}/movies`);
  return useQuery({
    queryKey: ["trailers", gameSlug],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;