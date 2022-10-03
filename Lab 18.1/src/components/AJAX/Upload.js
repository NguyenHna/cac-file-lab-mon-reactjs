const PostData = async (url, data) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    "Content-Type": "application/json",
  });
};

export default PostData;
