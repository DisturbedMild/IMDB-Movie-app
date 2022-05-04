import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/layout/Header";
import MovieSearch from "./components/movies/MovieSearch/MovieSearch";
import Movies from "./pages/Movies";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Notification from "./components/UI/Notification";

function App() {
  const registrationStatus = useSelector((state) => state.registration);
  return (
    <Fragment>
      <div className="container">
        {registrationStatus.notificationMessage && (
          <Notification
            className={registrationStatus.isCreated ? "success" : "error"}
          >
            {registrationStatus.notificationMessage}
          </Notification>
        )}
        <Header />
        <MovieSearch />
        <main>
          <Routes>
            <Route path="/home" element={<Movies />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
