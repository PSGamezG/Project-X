import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import "./Chat.css";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chat-container ${isOpen ? "open" : "closed"}`}>
      {isOpen && (
        <ChatBot
          steps={[
            {
              id: "salute",
              message: "¡Hola!",
              trigger: "askHowAreYou",
            },
            {
              id: "askHowAreYou",
              message: "¿Cómo estás?",
              trigger: "getMood",
            },
            {
              id: "getMood",
              options: [
                { value: "bien", label: "Bien", trigger: "wellResponse" },
                { value: "mal", label: "Mal", trigger: "badResponse" },
              ],
            },
            {
              id: "wellResponse",
              message: "¡Me alegra saber que estás bien!",
              trigger: "goodbye", // Cambié el trigger para apuntar al paso de despedida
            },
            {
              id: "badResponse",
              message: "Espero que te sientas mejor pronto.",
              trigger: "goodbye", // Cambié el trigger para apuntar al paso de despedida
            },
            {
              id: "goodbye",
              options: [{ value: "bye", label: "Chao", trigger: "adios" }],
            },
            {
              id: "adios",
              message: "¡Que tengas un buen día!",
              end: true,
            },
          ]}
        />
      )}
      <button
        className="chat-toggle-button"
        onClick={toggleChat}
        isOpen={isOpen}
      >
        {isOpen ? "Cerrar chat" : "Abrir Chat"}
      </button>
    </div>
  );
};

export default Chat;
