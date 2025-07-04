import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); // <-- fix typo here

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Optional: auto-dismiss alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is activated!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is activated!", "success");
    }
  };

  return (
    <>
      <Navbar Title="TextUtils" About="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> {/* fix: pass the alert object */}
      <div className="container">
        <TextForm heading="Enter your text to analyze:-" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
