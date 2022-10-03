import { useEffect } from "react";

const usePost = (url, data) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  });
  console.log("POST DATA =>>>>..");
  return;
};

export default usePost;
