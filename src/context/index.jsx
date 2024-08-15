import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [expanded, setExpanded] = useState(true);

  const [tab, setTab ] = useState('');


  return (
    <Context.Provider
      value={{
        expanded,
        setExpanded,
        tab,
        setTab
      }}
    >
      {children}
    </Context.Provider>
  );
}

export {Context, ContextProvider };
