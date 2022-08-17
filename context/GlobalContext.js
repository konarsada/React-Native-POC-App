import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 2)));
  }, []);

  const editUser = (id, navigation) => {
    const [user] = data.filter((item) => item.id === id);
    navigation.navigate("ManageUser", {
      email: user.email,
      id: user.id,
      name: user.name,
    });
  };

  const removeUser = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        removeUser,
        setData,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
