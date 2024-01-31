import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/Footer";
import Saludos from "./components/Saludos";


function App() {
  
  return (
    <>
    <section className="mainpage">
   <Saludos></Saludos>   
    </section>

  <Footer></Footer>
    </>
    
  )
}

export default App
