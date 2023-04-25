import { createContext, useState } from "react";
import { getLoggedInUser,  formatDateToInput,  formatDateTimeToISO } from "../controller/controller";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

  const loggedInUser = getLoggedInUser();
  const [user, setUser] = useState(loggedInUser);

  // const conversationsList = getConversationsList(user?.id);
  
  return <GlobalContext.Provider value={{ formatDateToInput, user, setUser, formatDateTimeToISO }}>
    {children}
  </GlobalContext.Provider>;
};

export default GlobalContext;