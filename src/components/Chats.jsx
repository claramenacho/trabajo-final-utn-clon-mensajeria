import { useState, useEffect, useRef } from 'react' // 1. Importar useRef
import { messages as mockMessages } from "../services/mockApi.js"
import '../components/styles/Chat.css'

export const Chats = ({ activeUser }) => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("")
    const [loggedUser, setLoggedUser] = useState(null)

    const login = (userData) => {
        console.log(userData, "info del usuario a logger")

    }
    

    // 2. CREAR la referencia PRIMERO (antes de los useEffect)
    const chatEndRef = useRef(null);

    // 3. EFECTO para el scroll (usa la referencia que creamos arriba)
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); 

    // 4. EFECTO para filtrar mensajes
    useEffect(() => {
        if (!activeUser) return; 

        const userMessages = mockMessages.filter(m => {
            const esDelContacto = m.author === activeUser.name;
            const esParaEsteContacto = m.author === "Sandra Garcia" && m.receiver === activeUser.name;
            return esDelContacto || esParaEsteContacto;
        });

        setMessages(userMessages);
    }, [activeUser]);

    // 5. PROTECCIÓN: Si no hay usuario, salimos antes de renderizar el resto
    if (!activeUser) return <section className="chat-empty">Selecciona un chat</section>
    
    const handleChangeText = (event) => {
        setText(event.target.value)
    }

    const sendMessage = () => {
        if (text.length === 0) return;
        const currentTime = new Date();
        const newMessage = {
            id: messages.length + 1,
            author: "Sandra Garcia",
            receiver: activeUser.name,
            time: currentTime.getHours() + ":" + currentTime.getMinutes().toString().padStart(2, '0'),
            text: text,
        };
        setMessages([...messages, newMessage]);
        setText("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendMessage()
        }
    }

    return (
        <section className='chat-container'>
            <header className='chat-header'>
                <h2>{activeUser.name}</h2>
                <p>En línea</p>
            </header>

            <div className='chat-body'>
                {messages.map((message) => (
                    <div key={message.id} className={`messages ${message.author === "Sandra Garcia" ? "me" : "received"}`}>
                        <p><b>{message.author}:</b> {message.text}</p>
                        <p className='timestamp'>{message.time}</p>
                    </div>
                ))}
                
                {/* 6. EL ANCLA: Siempre al final de la lista */}
                <div ref={chatEndRef} style={{ float: "left", clear: "both" }} />
            </div>

            <div className='chat-footer'>
                <input 
                    type='text'
                    placeholder='Escribe tu mensaje...'
                    onChange={handleChangeText}
                    onKeyDown={handleKeyDown}
                    value={text} 
                />
                <button onClick={sendMessage}>Enviar</button>
            </div>
        </section>
    )
}