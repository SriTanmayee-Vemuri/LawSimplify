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

