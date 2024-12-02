import React, { useState } from "react";

const ChatLayout: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]); // Store messages
  const [newMessage, setNewMessage] = useState<string>(""); // Input field value

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return; // Don't send empty messages
    
    // Add user message   
    const userMessage = newMessage;
    setMessages([...messages, userMessage]);

    // Clear input field
    setNewMessage("");

    // Auto reply from bot after a delay
    setTimeout(() => {
      handleBotReply(userMessage);
    }, 1000); // Delay of 1 second for bot reply
  };

  const handleBotReply = (userMessage: string) => {
    let botMessage = "";

    // Predefined replies based on user input (simple logic for now)
    if (userMessage.toLowerCase().includes("project")) {
      botMessage = "Tell me more about your project!";
    } else if (userMessage.toLowerCase().includes("question")) {
      botMessage = "What is your question? I'm here to help!";
    } else {
      botMessage = "I'm here to assist. How can I help?";
    }

    setMessages((prevMessages) => [...prevMessages, botMessage]); // Add bot reply
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h3 style={styles.headerTitle}>Chat with Us</h3>
      </div>

      {/* Messages Area */}
      <div style={styles.messagesArea}>
        {messages.length === 0 ? (
          <div style={styles.placeholder}>Start the conversation!</div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              style={
                index % 2 === 0
                  ? styles.messageFromUser
                  : styles.messageFromBot
              }
            >
              {msg}
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    width: "400px",
    height: "500px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "15px",
    textAlign: "center" as "center",
  },
  headerTitle: {
    margin: 0,
    fontSize: "18px",
  },
  messagesArea: {
    flex: 1,
    padding: "15px",
    backgroundColor: "#ffffff",
    overflowY: "auto" as "auto",
    display: "flex",
    flexDirection: "column" as "column",
    gap: "10px",
  },
  messageFromUser: {
    alignSelf: "flex-start" as "flex-start",
    padding: "10px 15px",
    backgroundColor: "#f1f1f1",
    borderRadius: "15px",
    maxWidth: "70%",
  },
  messageFromBot: {
    alignSelf: "flex-end" as "flex-end",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "15px",
    maxWidth: "70%",
  },
  inputArea: {
    display: "flex",
    borderTop: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#f8f9fa",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    outline: "none",
    fontSize: "14px",
    marginRight: "10px",
  },
  sendButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
  placeholder: {
    textAlign: "center" as "center",
    color: "#888",
    marginTop: "20px",
  },
};

export default ChatLayout;
