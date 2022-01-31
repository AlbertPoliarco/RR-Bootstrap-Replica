import "./App.css";
import Header from "./components/Header";
import StoreGallery from "./components/StoreGallery";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <StoreGallery />
    </div>
  );
}

export default App;
