
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Signin from "./components/Signin";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from './components/Footer'
import { Route, Switch } from "react-router-dom"
import Cart from "./components/Cart"
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
    
        <Navbar />
        <div className="container">
        
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={Signin} />
            <Route path="/cart" component={Cart} />
            <Route path="/about-us" component={About} />
          </Switch>
        
        </div>
        <Footer />
     
    </>
  )
}

export default App;
