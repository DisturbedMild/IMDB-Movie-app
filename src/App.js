import React, { Fragment, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MoviesPage from "./pages/MoviesPage";
import MoviePage from "./components/movies/MovieItem/MoviePage";
import Notification from "./components/UI/Notification";
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const RegistrationPage = React.lazy(() => import("./pages/RegistrationPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"))
const TopMoviesPage = React.lazy(() => import("./pages/TopMoviesPage"));

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
          <Route path="movies/movie/:movieId" element={<MoviePage />} />
          <Route path="top-movies" element={<TopMoviesPage />} />
          <Route
            path="registration"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <RegistrationPage />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <LoginPage />
              </Suspense>
            }
          />
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
      <Footer />
    </Fragment>
  );
}

export default App;
