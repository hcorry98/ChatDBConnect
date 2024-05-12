import { FC } from 'react';
import Message from '../../components/message/Message';

import './MessageList.css';

interface MessageListProps {}

const MessageList: FC<MessageListProps> = () => {
    const msg = {
        imageUrl: 'https://via.placeholder.com/150',
        imageAlt: 'profile picture',
        messageText: 'Hello govena',
        createdAt: '1 hour ago'
    };

    return (
        <div id='chat-message-list'>
            <Message
                key={0}
                isMyMessage={true}
                message={msg} />
        </div>
    );
}

export default MessageList;