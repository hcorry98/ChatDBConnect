import ChatTitle from '../title/ChatTitle';
import MessageList from '../message-list/MessageList';
import ChatForm from '../form/ChatForm';

import './ChatShell.css';

const ChatShell = () => {
    return (
        <div id='chat-container'>
            <ChatTitle
                title='ChatDBConnect' />
            <MessageList />
            <ChatForm />
        </div>
    );
}

export default ChatShell;