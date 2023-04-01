import HomePage from "./Pages/Home";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";

function App() {
  return (
    <>
      <Navbar />
      <HomePage>
        <Card title={"Марка и модель"} price={2000000} />
        <Card title={"Марка и модель"} price={2000000} />
        <Card title={"Марка и модель"} price={2000000} />
        <Card title={"Марка и модель"} price={2000000} />
      </HomePage>
    </>
  );
}

export default App;
