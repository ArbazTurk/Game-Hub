import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";
// import useData from "./useData";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => ({ data: platforms, error: null });
// useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    // queryFn: () =>
    //   apiClient
    //     .get<FetchResponse<Platform>>("/platforms/lists/parents")
    //     .then((res) => res.data),
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, //24h
    staleTime: ms("24h"),
    // initialData: { count: platforms.length, results: platforms, next: null },
    initialData: platforms,
  });

export default usePlatforms;
