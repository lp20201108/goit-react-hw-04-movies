import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieSearchPage from "./pages/MovieSearchPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import styles from "./App.css";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import routes from "./routes";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MovieSearchPage} />
        {/* <Route path="/genres" component={Genres} /> */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
