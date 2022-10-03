import { Route, Switch } from "react-router-dom";
import AllQuote from "./components/quotes/AllQuote";
import NewQuote from "./components/quotes/NewQuote";
import QuoteDetail from "./components/quotes/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path={"/quotes"} exact>
        <AllQuote />
      </Route>
      <Route path={"/quotes/:quoteId"} exact>
        <QuoteDetail />
      </Route>
      <Route path={"/new-quote"}>
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
