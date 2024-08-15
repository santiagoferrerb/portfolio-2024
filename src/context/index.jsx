import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <Context.Provider
      value={{
        expanded,
        setExpanded,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export {Context, ContextProvider };
