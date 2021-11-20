import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/" element={<Navigate to="/movies" />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
