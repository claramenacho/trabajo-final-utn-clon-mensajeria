import { createContext, useState, useEffect } from "react"
import { users as mockUsers } from "../services/mockApi"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  
  const [users, setUsers] = useState(() => {
    const savedContacts = localStorage.getItem("chat_contacts");
    return savedContacts ? JSON.parse(savedContacts) : mockUsers;
  });

  
  const [loggedUser, setLoggedUser] = useState(() => {
    const savedUser = localStorage.getItem("chat_session");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [selectedUserId, setSelectedUserId] = useState(null);

  
  useEffect(() => {
    localStorage.setItem("chat_contacts", JSON.stringify(users));
  }, [users]);

  
  const addUser = (newUser) => {
    const userExists = users.some(u => u.email === newUser.email);
    if (userExists) {
      return { success: false, message: "Este correo electrónico ya está en uso." };
    }

    
    const userToSave = { ...newUser, id: Date.now(), messages: [] };
    setUsers((prevUsers) => [...prevUsers, userToSave]);
    
    
    login(userToSave);
    
    return { success: true, message: "Usuario creado correctamente." };
  }

  const handleSelectedUserId = (id) => {
    setSelectedUserId(id);
  }

  
  const login = (userData) => {
    const foundUser = users.find(u => u.email === userData.email);

    if (foundUser && foundUser.password === userData.password) {
      setLoggedUser(foundUser);
      localStorage.setItem("chat_session", JSON.stringify(foundUser));
      return true;
    }
    return false;
  }

  const logout = () => {
    setLoggedUser(null);
    localStorage.removeItem("chat_session");
  }

  
  const handleMessages = (newMessage) => {
    setUsers((prevValue) => prevValue.map((u) =>
      u.id === selectedUserId
        ? {
          ...u,
          messages: [...u.messages, { ...newMessage, id: Date.now() }]
        }
        : u
    ));
  }

  
  const selectedUser = users.find(u => u.id === selectedUserId);

  return (
    <ChatContext.Provider value={{ 
      users, 
      addUser, 
      handleSelectedUserId, 
      login, 
      logout, 
      loggedUser, 
      handleMessages, 
      selectedUser 
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }