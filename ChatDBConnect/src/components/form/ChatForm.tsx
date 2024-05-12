import './ChatForm.css';

const ChatForm = () => {
    let formContents = (
        <>
            <input 
                type="text" 
                placeholder="type a message" 
            />
            <button 
                type="submit" 
                className="primary-button"
                disabled={true}
            >
                Send
            </button>
        </>
    );

    return (
        <form id="chat-form">
            {formContents}
        </form> 
    );
}

export default ChatForm;