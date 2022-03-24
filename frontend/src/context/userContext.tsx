import { createContext, useState, useEffect } from "react";

//----------------------------------------
//Set type for context provider
//----------------------------------------
type UserContextProviderProps = {
  children: React.ReactNode;
};

//----------------------------------------
//Set type for userContext
//----------------------------------------
type UserContextType = {
  users: {}[] | null;
};

//----------------------------------------
//Create User Context
//----------------------------------------
export const userContext = createContext<UserContextType | null>(null);

//----------------------------------------
//Create context provider
//----------------------------------------
export const UserContextProvider = (props: UserContextProviderProps) => {
  const [users, setUsers] = useState(null);

  //----------------------------------------
  //Fetch users from localstorage
  //----------------------------------------

  useEffect(() => {
    const allusers = JSON.parse(localStorage.getItem("users") || "[]");
    setUsers(allusers);
  }, [users]);

  return (
    <userContext.Provider value={{ users }}>
      {props.children}
    </userContext.Provider>
  );
};
