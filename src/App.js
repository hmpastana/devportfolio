import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
    </Router>
  );
}

export default App;
