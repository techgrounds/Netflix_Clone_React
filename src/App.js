// using ES6 modules
// import { Link } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from "./Components/Layout/Header";
// import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/MainPages/HomeScreen";
import FilmsScreen from "./Components/Pages/MainPages/FilmsScreen";
import LandingScreen from "./Components/Pages/PagesUser/LandingScreen";
import LogInScreen from "./Components/Pages/PagesUser/LogInScreen";
import ModalContainer from "./Components/Contents/ModalContainer";
import ModalContent from "../src/Components/Contents/ModalContent";

function App() {


  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={ModalContent} />
          <Route path="/FilmsScreen" component={FilmsScreen} />
          <Route path="/LandingScreen" component={LandingScreen} />
          <Route path="/LogInScreen" component={LogInScreen} />
          <Route exact path="/more-info/:id" component={ModalContainer} />
        </Switch>
        <Route exact path="/more-info/:id" component={ModalContainer} />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;



