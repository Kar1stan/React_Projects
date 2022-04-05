import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Navibar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Home"
import {Users} from "./Users"
import {About} from "./About"

const card_data = {
  title: "Cosmos",
  text: "Too little far away",
};

export default function App() {
  return (
      <div className="App">
        <Router>
     <Navibar/>
     <Routes>
       <Route exact path="/" element={<Home data={card_data} />}/>
       <Route path="/users" element={<Users/>}/>
       <Route path="/about" element={<About/>}/>
     </Routes>
     </Router>
     <Footer/>
    </div>
  );
}

