import "./my-sass.scss";
import Header from "./components/header/Header";
import Body from "./assets/Body/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="container--fluid">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
