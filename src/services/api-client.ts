import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "03ba60f159334587b875d928943748a5",
  },
});