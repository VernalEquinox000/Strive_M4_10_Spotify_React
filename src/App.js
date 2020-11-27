import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
//import Playlists from "./components/Playlists"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Route
       path="/"
       exact
       render={(props ) => <Home {...props} />} />
       <Route
      path="/AlbumPage/:id"
      render={(
      props 
      ) => <AlbumPage {...props} />} 
      />
      <Route
      path="/ArtistPage"
      exact
      render={(
      props 
      ) => <ArtistPage {...props} />} 
      />
      <Footer/>
    </Router>
    
  );
}

export default App;
