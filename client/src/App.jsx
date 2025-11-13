import { Route, Router, Routes } from "react-router-dom";
import LeftNav from "./components/layout/LeftNav";
import NavBar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {

  

  return (
    <>
      <NavBar />
      <main className="w-screen h-screen bg-zinc-950 text-white flex overflow-hidden">
        {/* Left Sidebar */}
        <LeftNav />

        {/* Right Content Area */}
        <div className="mains w-screen h-full">
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
