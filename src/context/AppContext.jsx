import { useState } from "react";
import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toogle, setToogle] = useState(true);
  const [show, setShow] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState("₨");

  const [settings, setSettings] = useState({
    currency: "₨",
    sellingDays: 42,
    farmName: "My Poultry Farm",
    alertBeforeSale: 7,
  });

  const handleToogle = () => {
    setToogle(!toogle);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "INR":
        return "₹";
      case "GBP":
        return "£";
      case "AUD":
        return "A$";
      case "NPR":
        return "₨";
      default:
        return "$";
    }
  };

  return (
    <AppContext.Provider
      value={{
        toogle,
        handleToogle,
        show,
        handleClose,
        currencySymbol,
        getCurrencySymbol,
        setCurrencySymbol,
        settings,
        setSettings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
