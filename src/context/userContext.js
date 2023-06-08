import {createContext, useState, useContext} from 'react';

const AppContext = createContext();

export const ContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  return (
    <AppContext.Provider value={{cart, setCart, addToCart, user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalState = () => useContext(AppContext);
