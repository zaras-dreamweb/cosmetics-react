import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Address from './components/Address/Address';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import CosmeticDetails from './CosmeticDetails/CosmeticDetails';
import useCosmetics from './hooks/useCosmetics';


export const CosmeticContext = createContext();
function App() {
  const [cosmetics, setCosmetics] = useCosmetics([]);

  return (
    <div className="App">
      <CosmeticContext.Provider value={[cosmetics, setCosmetics]}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/cosmetic/:id' element={<CosmeticDetails></CosmeticDetails>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          <Route path='/address' element={<Address></Address>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </CosmeticContext.Provider>
    </div >
  );
}

export default App;
