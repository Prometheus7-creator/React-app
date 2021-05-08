import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import Api from "./MyComponents/Api";

function App() {
  return (
    <div>
      <Api/>
      <h3>Todo list | Ansh Grover </h3>
      <Header/>
      <Footer/>
      <Todos/>
    </div>
  );
}

export default App;
