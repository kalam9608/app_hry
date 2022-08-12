import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    {/* <Navbar title={3}/>   */}
    {/* <Navbar /> */}

     <div className="container my-3">
    <TextForm />
    </div> 

    <About/>
    
    </>
 
  );
}

export default App;
