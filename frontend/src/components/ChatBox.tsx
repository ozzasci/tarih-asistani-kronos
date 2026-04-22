import React, { useState } from 'react';

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<{sender: string, text: string}[]>([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessage = { sender: 'User', text: input };
            setMessages([...messages, newMessage]);
            setInput('');
            // Simulate AI response
            setTimeout(() => {
                const aiResponse = { sender: 'AI', text: 'Hello! How can I assist you today?' };
                setMessages(prev => [...prev, aiResponse]);
            }, 1000);
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === 'User' ? 'user-message' : 'ai-message'}>
                        <strong>{msg.sender}: </strong>{msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? handleSendMessage() : null}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatBox;
