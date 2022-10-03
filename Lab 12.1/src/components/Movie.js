import { useState } from "react";

function Movie() {
  //hooks
  const [data, setData] = useState([]);

  //func
  async function handleClickBtnGetRequest() {
    const response = await fetch(
      "https://react-movies-4914b-default-rtdb.firebaseio.com/movies.json"
    );
    const datas = await response.json();
    console.log(datas);
    setData(Object.values(datas));
  }
  return (
    <div>
      <div>
        <button onClick={handleClickBtnGetRequest}>Fetch Movies</button>
      </div>
      <div>
        <ul>
          {data.map((data, index) => (
            <li>
              <h2>{data.title}</h2>
              <h3>{data.openingText}</h3>
              <p>{data.release}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
