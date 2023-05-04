import React from 'react';
import Footer from './Components/Footer/footer';
import ImageDrop from './Components/ImageDrop/ImageDrop';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ImageDrop/>
      <Footer/>
      {/* other content */}
    </div>
  );
}

export default App;