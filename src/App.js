import { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router";
import routes from "./routes";
import AppBar from "./components/AppBar";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const MovieSearchPage = lazy(() =>
  import("./pages/MovieSearchPage" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /* webpackChunkName: "movie-details" */)
);

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1> Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MovieSearchPage} />
          {/* <Route path="/genres" component={Genres} /> */}
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
