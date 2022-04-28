import React, { createContext, useContext, useReducer } from "react";
//prepares the data layer
export const StateContext = createContext();

//wrap information from data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pulls information from data layer
export const useStateValue = () => useContext(StateContext);
