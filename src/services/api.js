import axios from "axios";

const accessKey = "QYGvSCvu4kVIq5ZXUAS_9p-XDZ5oEyrkC9zybg4yjLo";
const apiUrl = "https://api.unsplash.com/";

export const requestImages = async () => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}`
  );
  return data;
};

export const requestImagesByQuery = async (query = "", page = 1) => {
  const { data } = await axios.get(
    `${apiUrl}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`
  );
  return data;
};