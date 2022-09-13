import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="contact" element={<div>Contacto</div>} />
        <Route path="detail/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;



// import NavBar from './components/NavBar/NavBar';
// // import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


// function App() {
//   return (
//     <div className="App">   
//       <header className="App-header">
//         <NavBar/>
//       </header>
//       {/* <ItemListContainer /> */}
//       <ItemDetailContainer />
//     </div>
//   );
// }

// export default App;
