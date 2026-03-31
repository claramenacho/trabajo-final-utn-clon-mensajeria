import React, { useState } from 'react'
import { Aside } from '../components/Aside'
import { Chats } from '../components/Chats'
import { users } from '../services/mockApi'
import '../style/Home.css'


export const Home = () => {
    
    const [selectedUser, setSelectedUser] = useState(null)

    const handleClickUser = (id) => {

        // Buscamos el objeto completo del usuario para tener toda su info
        const userFound = users.find(u => u.id === id)
        setSelectedUser(userFound)
        console.log("Usuario que se enviará al Chat:", userFound);
    }

    return (
        <div className="main-Layout">
            {/* Le pasamos la función al Aside */}
            <Aside handleClickUser={handleClickUser} />
            
            {/* Le pasamos el usuario seleccionado al Chat */}
            
            <Chats key={selectedUser?.id} activeUser={selectedUser} />
        </div>
    )
}