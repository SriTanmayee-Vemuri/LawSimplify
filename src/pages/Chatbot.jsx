// import React, { useState, useRef, useEffect } from "react";
// import { Send, User, Cpu } from "lucide-react";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello! I'm LawSimplify. How can I assist you with legal queries today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const chatEndRef = useRef(null);

//   const scrollToBottom = () => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSend = () => {
//     if (!input.trim()) return;
//     const userMessage = { sender: "user", text: input };
//     setMessages([...messages, userMessage]);
//     setInput("");

//     setTimeout(() => {
//       const botResponse = {
//         sender: "bot",
//         text: `You asked: "${input}". Here's a simplified legal explanation...`,
//       };
//       setMessages((prev) => [...prev, botResponse]);
//     }, 800);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") handleSend();
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-box">
//         {/* Heading */}
//         <div className="chatbot-heading">
//           <h1>LawSimplify Assistant</h1>
//           <p>Your AI legal companion</p>
//         </div>

//         {/* Chat Messages */}
//         <div className="chatbot-messages">
//           {messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`message-row ${msg.sender === "user" ? "user" : "bot"}`}
//             >
//               <div className="message-bubble">
//                 <div className="message-content">
//                   {msg.sender === "user" ? <User className="msg-icon" /> : <Cpu className="msg-icon" />}
//                   <span>{msg.text}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div ref={chatEndRef}></div>
//         </div>

//         {/* Input */}
//         <div className="chatbot-input">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your legal question..."
//           />
//           <button onClick={handleSend}>
//             <Send className="icon" />
//           </button>
//         </div>
//       </div>

//       <style>{`
//         body {
//           margin: 0;
//           font-family: 'Inter', sans-serif;
//         }
//         .chatbot-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           background: linear-gradient(135deg, #f6e6ff, #ffe6f0);
//         }
//         .chatbot-box {
//           width: 90%;
//           max-width: 700px;
//           height: 80vh;
//           display: flex;
//           flex-direction: column;
//           background-color: #fff8ff;
//           border-radius: 16px;
//           box-shadow: 0 16px 40px rgba(0,0,0,0.15);
//           overflow: hidden;
//           position: relative;
//         }
//         .chatbot-heading {
//           padding: 24px;
//           text-align: center;
//           background-color: #9b5de5;
//           color: #fff;
//         }
//         .chatbot-heading h1 {
//           margin: 0;
//           font-size: 1.6rem;
//           font-weight: 600;
//         }
//         .chatbot-heading p {
//           margin: 4px 0 0;
//           font-size: 0.95rem;
//           opacity: 0.85;
//         }
//         .chatbot-messages {
//           flex: 1;
//           padding: 24px;
//           display: flex;
//           flex-direction: column;
//           gap: 16px;
//           overflow-y: auto;
//           background-color: #fdf6ff;
//         }

//         /* Scrollbar styling for Webkit browsers */
//         .chatbot-messages::-webkit-scrollbar {
//           width: 6px;
//         }
//         .chatbot-messages::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .chatbot-messages::-webkit-scrollbar-thumb {
//           background-color: rgba(155,93,229,0.5); /* purple theme */
//           border-radius: 3px;
//         }

//         /* Scrollbar styling for Firefox */
//         .chatbot-messages {
//           scrollbar-width: thin;
//           scrollbar-color: rgba(155,93,229,0.5) transparent;
//         }

//         .message-row {
//           display: flex;
//         }
//         .message-row.user {
//           justify-content: flex-end;
//         }
//         .message-bubble {
//           max-width: 70%;
//           padding: 14px 18px;
//           border-radius: 20px;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.05);
//         }
//         .message-row.user .message-bubble {
//           background-color: #9b5de5;
//           color: #fff;
//           border-bottom-right-radius: 6px;
//         }
//         .message-row.bot .message-bubble {
//           background-color: #f3e6ff;
//           color: #3b2f5a;
//           border-bottom-left-radius: 6px;
//         }
//         .message-content {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .msg-icon {
//           width: 18px;
//           height: 18px;
//         }
//         .chatbot-input {
//           display: flex;
//           padding: 16px;
//           border-top: 1px solid #e5e7eb;
//           background-color: #fff8ff;
//           align-items: center;
//         }
//         .chatbot-input input {
//           flex: 1;
//           padding: 14px 20px;
//           border-radius: 999px;
//           border: 1px solid #d1c0eb;
//           font-size: 1rem;
//           outline: none;
//         }
//         .chatbot-input input:focus {
//           border-color: #9b5de5;
//           box-shadow: 0 0 0 2px rgba(155,93,229,0.2);
//         }
//         .chatbot-input button {
//           margin-left: 12px;
//           background-color: #9b5de5;
//           border: none;
//           width: 48px;
//           height: 48px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           color: #fff;
//           transition: background 0.2s;
//         }
//         .chatbot-input button:hover {
//           background-color: #7a3dc1;
//         }
//         .icon {
//           width: 22px;
//           height: 22px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Chatbot;

import React from "react";

function Chatbot() {
  return (
    <div
      style={{
        padding: "10px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/kvh7vhqJDKWCmikUNRvp1"
          style={{
            width: "100%",
            height: "530px",
            border: "2px solid purple",
            borderRadius: "25px",
            boxShadow: "10px 10px 10px gray"
          }}
          frameBorder="0"
          title="LawSimplify AI Chatbot"
        ></iframe>
      </div>
    </div>
  );
}

export default Chatbot;

