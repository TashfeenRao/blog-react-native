import React, { createContext, useReducer } from 'react';

export default (reducer, actions, initialState) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const combinedActions = {};
    for (let key in actions) {
      combinedActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...combinedActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
