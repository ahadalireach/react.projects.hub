/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const openSideBar = () => {
    setIsSideBar(true);
  };
  const closeSideBar = () => {
    setIsSideBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModal,
        openModal,
        closeModal,
        isSideBar,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
