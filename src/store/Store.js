import React, { createContext, useContext } from "react";

// create our context
const Store = createContext();
Store.displayName = "Store";

// useStore will return value of the Store
export const useStore = () => useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  // const logoColor = "#ff0000";

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
