import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="w-full">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
