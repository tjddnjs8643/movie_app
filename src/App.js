import React from "react";
import { HashRouter,Route} from "react-router-dom";
import Home from "./route/Home"
import About from "./route/About"
import Navigation from "./components/Navigation";
import Detail from "./route/Detail";
import "./App.css";

function App(){
  return <HashRouter>
    <Navigation />
    <Route path = "/" exact={true} component={Home}></Route>
   <Route path = "/about" component={About}/> 
   <Route path = "/movie/:id" component={Detail}/> 
   </HashRouter>
}

export default App;