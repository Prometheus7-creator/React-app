import './App.scss';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import Api from "./MyComponents/Api";

function App() {
  return (
    <>
      <Api/>
      <h3>Todo list | Ansh Grover </h3>
      <Header/>
      <Footer/>
      <Todos/>
    </>
  );
}

export default App;
