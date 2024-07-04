import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return( 
    <>
    <main className="w-full"> 
  <Outlet />
  </main>
  
  <footer>
  <Footer />
  </footer>
  </>
  )
};

export default App;
