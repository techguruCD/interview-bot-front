
const ChatTemplate = () => {



    //---------------------------------------
    const apiKey = '088c7f95cb11457889da4cc2e1797840';
    // --------------------------------------




    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById("yourInputId") as HTMLInputElement;
    const sendMessageButton = document.getElementById('sendMessage');

    sendMessageButton?.addEventListener('click', async () => {
        const userMessage = userInput?.value;
        if (userMessage?.trim() === '') return;

        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('user-message');
        userMessageDiv.textContent = userMessage;

        chatMessages?.appendChild(userMessageDiv);
        if (userInput) {
            userInput.value = '';
        }

        showLoading();

        try {
            const botResponse = await getBotResponseFromChatGPT(userMessage, chatHistory);

            hideLoading();

            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('bot-message');
            botMessageDiv.textContent = 'Bot: ' + botResponse;

            chatMessages?.appendChild(botMessageDiv);
            if (chatMessages) {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

            chatHistory.push({ role: "assistant", content: botResponse });
        } catch (error) {
            console.error('ChatGPT:', error);
            hideLoading();
        }
    });

    function showLoading() {
        const loadingDiv = document.createElement('div');
        loadingDiv.classList.add('loading');
        loadingDiv.textContent = 'Loading...';

        chatMessages?.appendChild(loadingDiv);
    }

    function hideLoading() {
        const loadingDiv = document.querySelector('.loading');
        if (loadingDiv) {
            chatMessages?.removeChild(loadingDiv);
        }
    }

    const chatHistory = [
        { role: "system", content: "a simple bot to talke about web design" }
    ];

    async function getBotResponseFromChatGPT(userMessage: string, chatHistory: any) {
        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        };

        chatHistory.push({ role: "user", content: userMessage });

        const requestData = {
            model: "gpt-3.5-turbo",
            messages: chatHistory,
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestData)
        });

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        return botResponse;
    }

    return (
        <>
            <div className="chat-container">
                <div className="chat-messages" id="chatMessages">
                </div>
                <div className="input-container">
                    <input type="text" className="input-box" id="userInput" placeholder="Type your Message..." />
                    <button className="send-button" id="sendMessage">Send</button>
                </div>
            </div>

        </>
    )
}

export default ChatTemplate