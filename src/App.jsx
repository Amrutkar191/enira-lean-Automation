import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import LoginForm from "./components/LoginForm.jsx";
import Footer from "./components/Footer.jsx";
import HomeScreen from "./components/HomePage/HomeScreen.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex items-center overflow-hidden w-full h-screen">
        <Routes>
          {/* Login Page Route */}
          <Route
            path="/"
            element={
              <div className="flex w-full h-full">
                {/* Left Section with Header */}
                <div className="w-[50vw] flex justify-center items-center bg-blue-50">
                  <Header />
                </div>

                {/* Right Section with Login Form and Footer */}
                <div className="w-[50vw] flex flex-col justify-between items-center overflow-hidden">
                  <div className="flex-grow flex items-center justify-center">
                    <LoginForm />
                  </div>
                  <Footer />
                </div>
              </div>
            }
          />

          {/* Home Page Route */}
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
