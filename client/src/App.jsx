import React from "react";
import { Routes,Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Movie from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import Favorite from "./pages/Favorite";
import MyBooking from "./pages/MyBookings";
import {Toaster} from 'react-hot-toast'
import Footer from "./components/Footer";


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
  {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movie/>}/>
      <Route path="/movies/:id" element={<MovieDetails/>}/>
      <Route path="/movies/:id/:date" element={<SeatLayout/>}/>
      <Route path="/favorite" element={<Favorite/>}/>
      <Route path="/my-bookings" element={<MyBooking/>}/>
    </Routes>
     {!isAdminRoute && <Footer/>}
    </>
  );
};

export default App;