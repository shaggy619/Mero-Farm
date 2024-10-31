import { useState } from "react";
import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toogle, setToogle] = useState(true);
  const [show, setShow] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <AppContext.Provider value={{ toogle, handleToogle, show, handleClose }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
