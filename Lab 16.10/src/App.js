import { Provider, useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.login);
  console.log(auth);

  return (
    <>
      <Header display={auth} />
      {!auth ? (
        <Auth />
      ) : (
        <div>
          <UserProfile />
          <Counter />
        </div>
      )}
    </>
  );
}

export default App;
