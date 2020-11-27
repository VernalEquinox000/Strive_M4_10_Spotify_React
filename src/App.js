import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
//import AlbumPage from "./components/AlbumPage";
//import ArtistPage from "./components/ArtistPage";
import NavBar from "./components/NavBar";
import Playlists from "./components/Playlists"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Playlists />
      <Route path="/" exact component = {Home}/>
      <Footer/>
    </Router>
    
  );
}

export default App;
