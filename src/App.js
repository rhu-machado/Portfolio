import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {GlobalStyle} from './Components/Header/Styled.js'

function App() {
  
  return (
    <section>
      <GlobalStyle />
      <Header />
      <Footer />
    </section>
  );
}

export default App;
