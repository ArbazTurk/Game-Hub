import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";
// import useData from "./useData";

const apiClient = new APIClient<Genre>("/genres");

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
// useData<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    // queryFn: () =>
    //   apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, //24h
    staleTime: ms("24h"),
    // initialData: { count: genres.length, results: genres, next: null },
    initialData: genres,
  });

export default useGenres;
