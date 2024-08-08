import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className=" w-full min-h-screen">
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/History" element={<h1>History</h1>} />
        <Route path="/Collection" element={<h1>collection</h1>} />
        <Route path="/Account" element={<h1>Account</h1>} />{" "}
      </Routes>
    </div>
  );
};

export default App;
