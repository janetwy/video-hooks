import axios from "axios";

const KEY = "AIzaSyAi-5un4mToZghtDn4-wwlrB_jyMBgHPS0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
