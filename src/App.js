import React, { Fragment, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/layout/Header";
// import MovieSearch from "./components/movies/MovieSearch/MovieSearch";
import MoviesPage from "./pages/MoviesPage";
import MovieItem from "./components/movies/MovieItem/MovieItem";
import LoginPage from "./pages/LoginPage";
import Notification from "./components/UI/Notification";
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const RegistrationPage = React.lazy(() => import("./pages/RegistrationPage"));

function App() {
  const registrationStatus = useSelector((state) => state.registration);

  return (
    <Fragment>
      {registrationStatus.notificationMessage && (
        <Notification
          className={registrationStatus.isCreated ? "success" : "error"}
        >
          {registrationStatus.notificationMessage}
        </Notification>
      )}
      <Header />
      {/* <MovieSearch /> */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to="movies">
                <MoviesPage />
              </Navigate>
            }
          />
          <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/movie/:movieId" element={<MovieItem />} />
          <Route
            path="registration"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <RegistrationPage />
              </Suspense>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="*"
            element={
              <Suspense>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
