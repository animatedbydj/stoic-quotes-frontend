import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Docs from "./components/Docs";
import Quotes from "./components/Quotes";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App w-full'>
      <main className='w-full'>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/docs' component={Docs} />
          <Route path='/quotes' component={Quotes} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
