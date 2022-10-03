import { useEffect, useState } from "react";

const useFetch = () => {
  // const [data, setData] = useState(null);
  async function fetchAPI(url) {
    const data = await fetch(url)
      .then((res) => res.json())
      .then((data) => Object.values(data))
      .then();
    console.log("Get Data =>>>");
    return data;
  }

  async function PostAPI(url, data) {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
    return console.log("POST DATA =>>>>..");
  }

  return {
    request: fetchAPI,
    post: PostAPI,
  };
};

export default useFetch;
