import { FC } from 'react';

import './Message.css';

interface MessageProps {
    isMyMessage: boolean;
    message: {
        imageUrl: string;
        imageAlt: string;
        messageText: string;
        createdAt: string;
    };
}

const Message: FC<MessageProps> = ({ isMyMessage, message }) => {
    const messageClass = isMyMessage ? 'you-message' : 'other-message';
    const imageThumbnail = isMyMessage ? null : <img src={message.imageUrl} alt={message.imageAlt} />;

    return (
        <div className={`message-row ${messageClass}`}>
            <div className='message-content'>
                {imageThumbnail}
                <div className='message-text'>
                    {message.messageText}
                </div>
                <div className='message-time'>{message.createdAt}</div>
            </div>
        </div>
    );
}

export default Message;