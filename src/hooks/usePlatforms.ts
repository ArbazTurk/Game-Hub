import platforms from "../data/platforms";
// import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platforms, error: null });
// useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
