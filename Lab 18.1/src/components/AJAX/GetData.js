const GetData = async (url) => {
  const data = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const arrayData = Object.values(data);
      return arrayData;
    });

  return data;
};

export default GetData;
