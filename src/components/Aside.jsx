import React, { useState } from 'react'
import { users } from '../services/mockApi'
import { MessageSquare, Users, Phone, Monitor, MoreHorizontal, Settings, Search } from 'lucide-react'
import './styles/Aside.css'



export const Aside = ({ handleClickUser }) => {
    console.log("¿Llegó la función?:", handleClickUser);
    const [search, setSearch] = useState("")
    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredUsers)

    return (
    <aside className="aside-container">
        <nav className="nav-sidebar">

            <button className="active">
                <MessageSquare size={20} />Chats</button>
            
            <button>
                <Monitor size={20} />
                <span>Conferents</span></button>
            <button>
                <Users size={20} />
                <span>Contacts</span>
            </button>
            <button>
                <Phone size={20} />
                <span>Calls</span>
            </button>
            <button>
                <MoreHorizontal size={20} />
                <span>More</span></button>
            <button>
                <Settings size={20} />
                <span>Settings</span></button>
        </nav>

      
      <section className="chats-panel">
        <div className="chats-header">
          <h1>Chats</h1>
          <span>+</span>
        </div>
        
        <div className="search-container">
            
            <input 
                type='search' 
                placeholder="Buscar contacto..." 
                onChange={handleChange}
            
            />
            <Search size={20} /> 
          
        </div>

        <ul className="users-list">
            {filteredUsers.length === 0 ? (
            <p style={{ padding: '20px' }}>No se encontraron contactos</p>
          ) : (
            filteredUsers.map((user) => (
              <li key={user.id} className="user-item">
                <div className="user-info"onClick={() => handleClickUser(user.id)}>
                    <span className="user-name">{user.name}</span>
                    <small className="user-message">{user.message}</small>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>
    </aside>
  );
}
