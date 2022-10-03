import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import GetData from "./components/AJAX/GetData";
import Header from "./components/layout/Header";
import NoQuotesFound from "./components/quotes/NoQuotesFound";
import QuoteDetail from "./components/quotes/QuoteDetail";
import QuoteForm from "./components/quotes/QuoteForm";
import QuoteList from "./components/quotes/QuoteList";

function App() {
  const [data, setData] = useState([{ author: "", text: "" }]);

  useEffect(() => {
    GetData(
      "https://react-movies-4914b-default-rtdb.firebaseio.com/data.json"
    ).then((data) => {
      setData(data);
    });
  }, [data]);

  return (
    <Switch>
      <Route path={"/quotes"} exact>
        <Header />
        <QuoteList quotes={data} />
      </Route>
      <Route path={"/quotes/:quoteId"} exact>
        <Header />
        <QuoteDetail />
      </Route>
      <Route path={"/new-quote"}>
        <Header />
        <QuoteForm />
      </Route>
      <Route path={"*"}>
        <Header />
        <NoQuotesFound />
      </Route>
    </Switch>
  );
}

export default App;
