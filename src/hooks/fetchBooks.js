import axios from "axios";

const fetchBooks = async (query) => {
  const clientId = process.env.REACT_APP_NAVER_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_NAVER_CLIENT_SECRET;

  const url = "/v1/search/book.json";
  const headers = {
    "X-Naver-Client-Id": clientId,
    "X-Naver-Client-Secret": clientSecret,
  };

  try {
    const response = await axios.get(url, {
      params: { query },
      headers,
    });
    return response.data.items;
  } catch (error) {
    console.error("Error searching books:", error);
    throw error;
  }
};

export default fetchBooks;
