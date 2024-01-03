import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import PlayPage from "./pages/play btn page/PlayPage";
import GoogleLogin from "./pages/sidebar/GoogleLogin";
import ContestRules from "./pages/sidebar/ContestRules";
import Start from "./pages/start page/Start";
import Submit from "./pages/start page/Submit";
import ContactUs from "./pages/sidebar/ContactUs";
import AboutUs from "./pages/sidebar/AboutUs";
import Page404 from "./Components/Page404/Page404";
import Results from "./Components/Results/Results";
import QuizPage from "./Components/QuizPage/QuizPage";
import CoinHistory from "./pages/CoinHistory/CoinHistory";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/play/:id" element={<PlayPage />} />
          <Route path="/coin-history" element={<CoinHistory />} />
          <Route path="/googleLogin" element={<GoogleLogin />} />
          <Route path="/contestRules" element={<ContestRules />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/coin-history" element={<CoinHistory />} />
          <Route path="/results/:id" element={<Results />} />
          <Route path="/quizPage/:id" element={<QuizPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
