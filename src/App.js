import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
<Navbar Title="TextUtils" About="About TextUtils" />
<div className='container'>
  <TextForm  heading = " Enter  your text to analyze:-"/>
</div>
<About></About>
   </>
  );
}

export default App;
