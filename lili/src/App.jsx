import './App.css';
import Home from './Pages/Home';
import Shoes from './Pages/Shoes';
import Clothes from './Pages/Clothes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import Layout from './Components/Layout';
import Popup from './Pages/Popup';
import { useState } from 'react';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState(null); // To store clicked item info

  // Function to open popup with item data
  const openPopup = (data) => {
    setPopupData(data);
    setPopupOpen(true);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home openPopup={openPopup} />} />
          <Route path="/shoes" element={<Shoes openPopup={openPopup} />} />
          <Route path="/clothes" element={<Clothes openPopup={openPopup} />} />
        </Routes>

        {/* Popup Component */}
        <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} data={popupData} />
      </Layout>
    </Router>
  );
}

export default App;
