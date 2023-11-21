import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";


function App() {
  return (
    <>
    <div className="sm:h-screen sm:overflow-y-hidden">
    <Navbar />
    <Settings />
    <Footer />
    </div>
    </>
  );
}

export default App;
