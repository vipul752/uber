import { createContext } from "react";
import { useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <div>
      <UserDataContext.Provider value={[userData, setUserData]}>
        {" "}
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
