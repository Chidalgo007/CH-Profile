import {useState, useRef, useEffect} from "react";

function renderMessageWithLinks(text) {
    // Convert Markdown-style [text](url) to <a> links
    const html = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" class="text-blue-500 underline">$1</a>');

    return { __html: html }; // React's way to render raw HTML
}

export default function ChatBot() {
    const [messages, setMessages] = useState([
        {from: "bot", text: "Hello! How can I help you today?"},
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [close, setClose] = useState(true);
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, loading]);

    // Fixed sendMessage function (removed duplicate)
    const sendMessage = async () => {
        if(!input.trim()) return;

        const newUserMessage = {from: "user", text: input};
        setMessages((prev)=>[...prev, newUserMessage]);
        setInput("");
        setLoading(true);

        try{
            const response = await fetch("https://chatbot-63r6dsfnoq-uc.a.run.app", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
        } catch (error) {
            setMessages((prev) => [...prev, { from: "bot", text: `Error: ${error.message}` }]);
            console.error("Full error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Avatar/Trigger Button - Shows when chat is closed */}
            <div className={`overflow-hidden transition-all duration-800 ease-in-out cursor-pointer fixed bottom-4 right-4 md:w-32 md:h-32 w-16 h-16 shadow-2xl rounded-full flex items-center justify-center z-30 border border-blue-400 bg-amber-50
                ${!close ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}`}
                 onClick={()=>{setClose(false)}}>

                {/* video file */}
                 <video
                    src="/img/avatars/AI-video.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-full"
                />
            </div>

            {/* Chat Window - Shows when chat is open */}
            <div className={`transition-all duration-500 ease-in-out fixed bottom-4 right-4 w-80 bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden pt-3 z-50 border border-gray-200 
                ${close ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"}`}
            >
                {/* Messages Container with hidden scrollbar */}
                <div
                    ref={messagesContainerRef}
                    className="p-3 h-80 space-y-2 messages-container overflow-y-scroll"
                    style={{
                        overflowY: 'scroll',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {messages.map((msg, i) => (
                        <div key={i} className={`text-sm ${msg.from === "bot" ? "text-left" : "text-right"}`}>
                            <div className={`inline-block px-3 py-2 rounded-lg max-w-xs break-words ${
                                msg.from === "bot"
                                    ? "bg-gray-200 text-gray-800"
                                    : "bg-blue-500 text-white"
                            }`}>
                                <div dangerouslySetInnerHTML={renderMessageWithLinks(msg.text)} />
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="text-left">
                            <div className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-gray-500 text-xs">
                                <div className="flex items-center space-x-1">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                    </div>
                                    <span className="ml-2">Typing...</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Invisible element to scroll to */}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 flex gap-2 border-t border-gray-200 bg-gray-50">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Type your question..."
                        className="flex-1 p-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                        Send
                    </button>
                </div>

                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full border border-blue-400 text-blue-400 hover:border-red-800 hover:text-red-800 transition-colors text-sm font-semibold"
                    onClick={() => setClose(true)}
                >X
                </button>
            </div>
        </>
    );
}